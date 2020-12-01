import { Salle } from './salle.model';

export class Movie {
  public id: number;
  public title: string;
  public year: number;
  public genre: string;
  public director: string;
  public actors: string;
  public description: string;
  public rating: number;
  public coverUrl: string;
  public salles: Salle[];
  constructor(id: number, title: string, year: number, genre: string, director: string, actors: string, description: string, rating: number, coverUrl: string,
    salles: Salle[]) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.director = director;
    this.actors = actors;
    this.description = description;
    this.rating = rating;
    this.coverUrl = coverUrl;
    this.salles = salles;
  }
}
