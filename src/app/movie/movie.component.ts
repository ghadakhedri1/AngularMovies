import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Salle } from '../model/salle.model';
import { SalleService } from '../shared/salle.service';
import { element } from 'protractor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  movieCopy: Movie[];
  salle;
  searchValue: string;
  salles: Salle[];
  selectedItem: string;

  constructor(public sm: MovieService, private activatedRoute: ActivatedRoute, ss: SalleService) {
  }

  ngOnInit(): void {
    this.sm.getAllMovies();
    this.movies = this.sm.getMovies();
    console.log('movies', this.movies);
    this.movieCopy = this.movies;
  }

  selected(salle: any) {
    this.salle = salle;
    console.log('child');
  }
  onRefresh() {
    this.ngOnInit();
  }
  onSearch() {
    let term = this.searchValue;
    if (this.selectedItem == 'Genre') {
      this.movies = this.movieCopy.filter(element => {
        return element.genre.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());

      });
    } else if (this.selectedItem == 'Year') {
      this.movies = this.movieCopy.filter(element => {
        return element.year.toString().toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());

      });
    } else if (term == '') {
      this.onRefresh();
    }

  }



}