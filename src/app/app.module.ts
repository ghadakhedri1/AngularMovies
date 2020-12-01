import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { SalleComponent } from './salle/salle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { BookMovieComponent } from './movie/movie-details/book-movie/book-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    SalleComponent,
    AddSalleComponent,
    SearchfilterPipe,
    MovieDetailsComponent,
    BookMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
