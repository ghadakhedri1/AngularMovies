import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-like',
  templateUrl: './movie-like.component.html',
  styleUrls: ['./movie-like.component.css']
})
export class MovieLikeComponent implements OnInit {
  isFavorite: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onClickLike() {
    this.isFavorite = !this.isFavorite;
  }
}
