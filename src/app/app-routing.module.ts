import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {UpdateMovieComponent} from './update-movie/update-movie.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';
import {SalleComponent} from './salle/salle.component';
import {AddSalleComponent} from './add-salle/add-salle.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {path: 'movies', component: MovieComponent},
  {path: 'addMovie', component: AddMovieComponent},
  {path: 'update/movie/:id', component: UpdateMovieComponent},
  {path: 'delete/movie/:id', component: DeleteMovieComponent},
  {path: 'salles', component: SalleComponent},
  {path: 'addSalle', component: AddSalleComponent},
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
