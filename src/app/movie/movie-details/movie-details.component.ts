import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { Salle } from '../../model/salle.model';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() u: Movie;
  @Input() i: number;
  currentRate = 0;
  selectedIndex: number;
  numberOfLikes = 0;
  isFavorite: boolean;
  salless: Salle[];
  outputArray = [];
  isBooked=false;

  constructor(public sm: MovieService) { }

  ngOnInit(): void {
    this.salless = this.sm.getSalleMovies(this.i);
    console.log('choufni',this.salless);
    for (let element in this.salless) {
      this.outputArray.push({

        capacite : this.salless[element]
      });
    }
    console.log('ahawa' , this.outputArray);
    this.selectedIndex = null;
    console.log('hanii houni', this.u.salles[this.currentRate]);
  }

  onClickLike(index) {
    this.isFavorite = !this.isFavorite;
    this.numberOfLikes++;
    this.selectedIndex = index;
  }

  onClickDislike(index) {
    this.isFavorite = !this.isFavorite;
    this.numberOfLikes--;
    this.selectedIndex = index;
  }
  onChangeStatus(){
    this.isBooked = ! this.isBooked;
  }
}
