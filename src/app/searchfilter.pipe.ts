import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from './model/movie.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(movies: Movie[], searchValue: string): Movie[] {
    if (!movies || !searchValue) {
      return movies;
    }
    return movies.filter(movie => movie.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.actors.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.year.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.director.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.genre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      movie.rating.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
