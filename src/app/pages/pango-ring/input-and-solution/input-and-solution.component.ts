import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Algo } from '../../../classes/algo-list';
import { AlgorithmService } from 'src/app/shared/services/algorithm/algorithm.service';


@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {


  @Input() algoID: Algo;
  newSolution: string;
  solutions: string[] = [];
  displayButtonNextAlgo = false;
  displayButtonPreviousAlgo = false;
  algo: any = [];
  currentAlgo: any;
  currentAlgoIndex: number;

  constructor(private route: ActivatedRoute, public algorithmService: AlgorithmService) { }

  allowNextAlgo() {
    this.solutions.push(this.newSolution);
    for (const solution of this.solutions) {
      if (solution === this.algoID.solution) {
        this.displayButtonNextAlgo = true;
      } else {
        this.displayButtonNextAlgo = false;
      }
    }
  }

  allowPreviousAlgo() {
    if (this.currentAlgoIndex >= 1) {
      this.displayButtonPreviousAlgo = true;
    }
    else {
      this.displayButtonPreviousAlgo = false;
    }
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.algo = this.algorithmService.getAlgorithmById(+params.get('id'));
      this.allowPreviousAlgo();
      this.displayButtonNextAlgo = false;
      // tslint:disable-next-line: radixng
      // tslint:disable-next-line: radix
      console.log(this.algo);
      this.currentAlgo = this.algo.find((algor) => (algor.id === (params.get('id'))));

      this.currentAlgo = this.algo[this.currentAlgoIndex];
    });
    this.allowNextAlgo();

    setInterval(() => {
      this.allowPreviousAlgo();
    }, 100);
  }
}
