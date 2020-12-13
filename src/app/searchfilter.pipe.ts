import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './model/movie.model';
import { Salle } from './model/salle.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(salle: Salle[], searchValue: string): Salle[] {
    if (!salle || !searchValue) {
      return salle;
    }
    return salle.filter(s => s.capacite.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      s.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) );
  }

}
