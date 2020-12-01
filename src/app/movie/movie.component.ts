import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Salle } from '../model/salle.model';
import { SalleService } from '../shared/salle.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  salle;



  searchValue;
  salles: Salle[];

  constructor(public sm: MovieService, private activatedRoute: ActivatedRoute, ss: SalleService) {
  }

  ngOnInit(): void {
    this.sm.getAllMovies();
    console.log('movies', this.movies);

  }

  selected(salle: any) {
    this.salle = salle;
    console.log('child');
  }
  onSalleSelected(movie: Movie) {
    
  }




}