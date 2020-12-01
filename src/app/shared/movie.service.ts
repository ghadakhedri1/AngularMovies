import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Salle } from '../model/salle.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[];
  public salles: Salle[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  getMovie(index: number) {
    return this.movies[index];
}

  getAllMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies').subscribe(
      (data) => {
        this.movies = data;
        console.log(this.movies);
      },
      error => {
        alert('error');
      },
      () => {
        console.log('finished');
      }
    );
  }
  getSalleMovies(index : number){
    this.salles = this.movies[index].salles;
    return this.salles;
  }

  addMovie(data: any) {
    const url: string = 'http://localhost:3000/movies';
    return this.http.post<Movie>(url, data).subscribe(
      (data) => {
        console.log('movie added');
        this.router.navigate(['movies']);
      }
      ,
      error => {
        alert('error');
      },
      () => {
        console.log('finished');
      }
    );
  }

  updateMovie(data: any, id: number) {
    const url: string = 'http://localhost:3000/movies/' + id;
    return this.http.put(url, data);
  }

  getMovieById(id: number) {
    const url: string = 'http://localhost:3000/movies/' + id;
    return this.http.get(url);

  }

  deletemovie(id: number) {
    const url: string = 'http://localhost:3000/movies/' + id;
    return this.http.delete(url);
  }
}
