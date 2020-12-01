import {Movie} from './movie.model';

export class Salle {
 public nom: string;
  public  capacite: number;


  constructor(nom: string, capacite: number) {
    this.nom = nom;
    this.capacite = capacite;
  }

}
