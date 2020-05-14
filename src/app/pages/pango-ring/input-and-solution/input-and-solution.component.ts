import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {

  @Output() sendAlgorithmSolution: EventEmitter<any> = new EventEmitter();
  @Input() algorithm;
  @Input() isNotLastAlgo;

  newSolution: string;
  isValid: any;
  displayButtonPreviousAlgo = false;
  wrongSolution = false;

  constructor() { }

  ngOnInit(): void {
  }
  checkAndUpdateAlgo() {
    const solutionFunction = eval(this.newSolution);
    console.log(this.newSolution);
    const result = solutionFunction(this.algorithm.input);
    this.isValid = this.algorithm.solution === JSON.stringify(result);

    if (this.isValid) {
       this.algorithm.isCompleted = this.isValid;
       this.sendAlgorithmSolution.emit(JSON.stringify(this.newSolution));
    }
    if (this.isValid === false) {
      this.wrongSolution = true;
      this.algorithm.isCompleted = false;
    }
    if (this.isValid === true) {
      this.wrongSolution =  false;
    }
  }
}
