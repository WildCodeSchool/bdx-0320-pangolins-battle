import { Component, OnInit, Input, ɵɵcontainerRefreshEnd } from '@angular/core';
import { Algo } from '../../../classes/algo-list';

@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {

  @Input() algorithm: Algo;

  newSolution: string;

  displayButtonPreviousAlgo = false;
  wrongSolution = false;

  constructor() { }

  ngOnInit(): void {
  }
  checkAndUpdateAlgo() {
    const solutionFunction = eval(this.newSolution);
    const result = solutionFunction(this.algorithm.inputs);
    const isValid = this.algorithm.solution === JSON.stringify(result);

    if (isValid) {
      this.algorithm.isCompleted = isValid;
      console.log(isValid);

    } else {
      // TODO faire quelque chose quand pas bon
    }
    if (isValid === false) {
      this.wrongSolution = true;
      this.algorithm.isCompleted = false;
    }
    if (isValid === true) {
      this.wrongSolution =  false;
    }
  }
}
