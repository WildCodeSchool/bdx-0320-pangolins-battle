import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewAlgo } from '../../../classes/new-algo';

@Component({
  selector: 'btd-algo-form',
  templateUrl: './algo-form.component.html',
  styleUrls: ['./algo-form.component.scss']
})
export class AlgoFormComponent implements OnInit {

  hidden = true;
  algos: NewAlgo [] = [];
  finalAlgo = {};

  @Input() isHidden;

  @Input() editedAlgo;

  @Output() changedAlgo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.editedAlgo = {id: 0, level: 0, instructions: '', input: '', skeleton: '', solution: ''};
  }
  displayForm(){
    this.hidden = !this.hidden;
  }

  dataFormToParent(){
    this.finalAlgo = {
      id: this.editedAlgo.id,
      level: this.editedAlgo.level,
      solution: this.editedAlgo.solution,
      skeleton: this.editedAlgo.skeleton,
      input: this.editedAlgo.input,
      instructions: this.editedAlgo.instructions};
    this.changedAlgo.emit(this.finalAlgo);
    console.log(this.finalAlgo);
    this.displayForm();
  }
}
