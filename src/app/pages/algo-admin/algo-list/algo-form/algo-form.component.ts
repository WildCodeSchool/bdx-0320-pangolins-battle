import { Component, OnInit } from '@angular/core';
import { NewAlgo } from '../../../../classes/new-algo';

@Component({
  selector: 'btd-algo-form',
  templateUrl: './algo-form.component.html',
  styleUrls: ['./algo-form.component.scss']
})
export class AlgoFormComponent implements OnInit {

  algoList: string[] = ['Algorithme 1', 'Algorithme 2', 'Algorithme 3', 'Algorithme 4', 'Algorithme 5'];

  display = true;
  model: NewAlgo = new NewAlgo();

  constructor() { }

  ngOnInit(): void {
    }

  displayForm(){
    this.display = !this.display;
  }

}
