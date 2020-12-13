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
      id: ['', [Validators.required , Validators.pattern('^[0-9]+$')]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      year: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]+$')]],
      genre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      director: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      actors: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      rating: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      coverUrl: ['' ],
      fileSource: ['']
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
