import {Component, OnInit} from '@angular/core';
import {MovieService} from '../shared/movie.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(public sm: MovieService, private f: FormBuilder) {
  }

  form = this.f.group({
      id: ['', [Validators.required , Validators.pattern('^[0-9]+$')]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      year: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]+$')]],
      genre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      director: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      actors: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      rating: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      coverUrl: ['', [Validators.required]],
    }
  );
  selectedFile = null;

  get id() {
    return this.form.get('id');
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
  }

  get title() {
    return this.form.get('title');
  }

  get year() {
    return this.form.get('year');
  }

  get genre() {
    return this.form.get('genre');
  }

  get director() {
    return this.form.get('director');
  }

  get actors() {
    return this.form.get('actors');
  }

  get description() {
    return this.form.get('description');
  }

  get rating() {
    return this.form.get('rating');
  }
}
