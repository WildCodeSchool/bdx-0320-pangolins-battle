import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {

  constructor() { }
  @Input() myID: any;
  newSolution: string;
  solutions: string[] = [];
  displayButtonNextAlgo = false;



ngOnInit(): void {}
allowNextAlgo() {
      this.solutions.push(this.newSolution);
      for (const solution of this.solutions) {
      if (solution === this.myID.outputValidation) {
          this.displayButtonNextAlgo = true;
      }
    }
  }

}
