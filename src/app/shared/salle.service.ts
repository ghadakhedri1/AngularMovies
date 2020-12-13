import {Injectable} from '@angular/core';
import {Salle} from '../model/salle.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
public  salles: Salle[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  getSalles() {
    return this.http.get<Salle[]>('http://localhost:3000/salles').subscribe(
      (data) => {
        this.salles = data;
        console.log(this.salles);
      },
      error => {
        alert('error');
      },
      () => {
        console.log('finished');
      }
    );
  }

  addSalle(data: any) {
    const url: string = 'http://localhost:3000/salles';
    return this.http.post<Salle>(url, data).subscribe(
      (data) => {
        console.log('salle added');
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
 
}
