import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Salle} from '../model/salle.model';
import {SalleService} from '../shared/salle.service';
import {Movie} from '../model/movie.model';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  @Input() public salles: Salle[];
  @Output() public salleSelected = new EventEmitter<Salle>();
  buttonClicked = false;

  constructor(public serviceSalle: SalleService) {
  }

  ngOnInit(): void {
    this.serviceSalle.getSalles();
  }

  selectSalle(s: Salle) {

    this.salleSelected.emit(s);
    this.buttonClicked = !this.buttonClicked;
  }


}
