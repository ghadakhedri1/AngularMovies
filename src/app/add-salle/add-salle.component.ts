import {Component, OnInit} from '@angular/core';
import {SalleService} from '../shared/salle.service';
import {Movie} from '../model/movie.model';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {
  constructor(public salleService: SalleService) {
  }

  ngOnInit(): void { 
  }



}
