import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.css']
})
export class BookMovieComponent implements OnInit {
@Output() changeStatus = new EventEmitter();
 @Input() clicked: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectedButton() {
    this.changeStatus.emit();
  }
}
