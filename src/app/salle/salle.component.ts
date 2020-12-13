import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Salle } from '../model/salle.model';
import { SalleService } from '../shared/salle.service';
import { Movie } from '../model/movie.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  @Input() public salles: Salle[];
  @Output() public salleSelected = new EventEmitter<Salle>();
  buttonClicked = false;
  searchedItem: string;
  salle2: Salle[] = [];
  subscription : Subscription;
  constructor(public serviceSalle: SalleService) {
  }

  ngOnInit(): void {
    this.serviceSalle.getSalles();
  }

  selectSalle(s: Salle) {

    this.salleSelected.emit(s);
    this.buttonClicked = !this.buttonClicked;
  }
  onSearch() {
    this.salles = this.salles.filter(
      salle => {
        return salle.nom.toLocaleLowerCase().match(this.searchedItem.toLocaleLowerCase());
      }


    )
  }

}
