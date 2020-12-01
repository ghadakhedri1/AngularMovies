import {Component, OnInit} from '@angular/core';
import {MovieService} from '../shared/movie.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movie;
  id;

  constructor(public sm: MovieService, private f: FormBuilder, private activetedRoute: ActivatedRoute,
              private router: Router) {
  }

  form = this.f.group(
    {
      id: ['', Validators.required],
      title: ['', Validators.required],
      year: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      director: ['', [Validators.required]],
      actors: ['', [Validators.required]],
      description: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      coverUrl: ['', [Validators.required]],
    }
  );

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.sm.getMovieById(this.id).subscribe((result) => {
      this.movie = result;
      this.form.patchValue(this.movie);
    });
  }
  submit() {
    this.sm
      .updateMovie(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['/movies']);
      });
  }

}
