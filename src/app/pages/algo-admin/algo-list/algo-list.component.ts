import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewAlgo } from '../../../classes/new-algo';



@Component({
  selector: 'btd-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.scss']
})
export class AlgoListComponent implements OnInit {

  @Input() algoList: NewAlgo [];

  @Output() hideForm = new EventEmitter();

  @Output() sendEditedAlgo = new EventEmitter();

  @Input() changeCheck: boolean;

  editedAlgo: NewAlgo;
  isHidden = false;
  pathImgChecked = 'assets/images/checked.svg';
  pathImgCheckedGreen = 'assets/images/checkedGreen.svg';

  constructor() { }

  ngOnInit(): void {

  }

  displayForm(){
    this.isHidden = !this.isHidden;
  }

  editAlgo(targetedAlgo){
    this.editedAlgo = targetedAlgo;
    this.displayForm();
    this.hideForm.emit(this.isHidden);
    this.sendEditedAlgo.emit(this.editedAlgo);

  }
  changeImgChecked(algo){
    return (algo.level > 0 && algo.instructions != null && algo.solution != null);
  }
}
