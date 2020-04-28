import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewAlgo } from '../../../classes/new-algo';

@Component({
  selector: 'btd-algo-form',
  templateUrl: './algo-form.component.html',
  styleUrls: ['./algo-form.component.scss']
})
export class AlgoFormComponent implements OnInit {

  display = true;
  algos: NewAlgo [] = [];
  finalAlgo = {};

  @Input() isHidden;

  @Input() editedAlgo;

  @Output() changedAlgo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.editedAlgo = {id: 0, level: 0, instructions: '', skeleton: '', solution: ''};
  }

  displayForm(){
    this.display = this.isHidden;
    console.log(this.display);
  }

  dataFormToParent(){
    // Manque le level dans l'API + Title inutile + Manque skeleton
    this.finalAlgo = {
      id: this.editedAlgo.id,
      title: this.editedAlgo.level,
      solution: this.editedAlgo.solution,
      instructions: this.editedAlgo.instructions};
    this.changedAlgo.emit(this.finalAlgo);
    console.log(this.finalAlgo);
    this.displayForm(); // fonctionne pas ?
  }
}