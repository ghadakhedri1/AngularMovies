import {Component, OnInit} from '@angular/core';
import {MovieService} from '../shared/movie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(public sm: MovieService, private activatedRouter: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.sm
      .deletemovie(
        this.activatedRouter.snapshot.params['id'])
      .subscribe(data => this.route.navigate(['/movies']));
  }

}
