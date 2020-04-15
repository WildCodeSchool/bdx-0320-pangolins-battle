import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'btd-output-and-validation',
  templateUrl: './output-and-validation.component.html',
  styleUrls: ['./output-and-validation.component.scss']
})
export class OutputAndValidationComponent implements OnInit {
  constructor() { }
  @Input() myID: any;
  solutions: string[] = [];
  displayButtonNextAlgo = false;
  ngOnInit(): void {}
  receiveStudentSolution(newSolution) {
    this.solutions.push(newSolution);
    }

  allowNextAlgo(): boolean {
    for (const solution of this.solutions) {
      if (solution === this.myID.outputValidation) {
        return this.displayButtonNextAlgo = true;
     }
   }
}
}
