import { Component, OnInit } from '@angular/core';
import { NewAlgo } from 'src/app/classes/new-algo';

@Component({
  selector: 'btd-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.scss']
})
export class AlgoListComponent implements OnInit {

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
