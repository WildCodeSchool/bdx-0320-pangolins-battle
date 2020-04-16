import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlgoList } from '../../classes/algo-list';


@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  @Input() myID: any;
  newSolution: string;
  solutions: string[] = [];
  displayButtonNextAlgo = false;
  displayButtonPreviousAlgo = false;
  algoList: AlgoList[] = [];
  currentAlgo: any;
  currentAlgoIndex: number;

  allowNextAlgo() {
    this.solutions.push(this.newSolution);
    for (const solution of this.solutions) {
      if (solution === this.myID.outputValidation) {
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
    const algo1 = new AlgoList(1, 'tu dois rentrer un algorithme simple', 'tu dois ranger ce tableau dans l\'ordre décroissant: [1, 2, 3]', '[3, 2, 1]');
    const algo2 = new AlgoList(2, 'tu dois rentrer un algorithme un peu moins simple', 'tu dois afficher le dernier numéro du tableau [1, 2, 3, 4]', '4');
    const algo3 = new AlgoList(3, 'tu dois rentrer un algorithme délicat', 'tu dois afficher le premier numéro: [1, 2, 3, 4, 5]', '1');
    const algo4 = new AlgoList(4, 'tu dois rentrer un algorithme plus délicat', 'tu dois afficher la troisième entrée du tableau suivant : [1, 2, 3, 4, 5, 6]', '3');
    const algo5 = new AlgoList(5, 'tu dois rentrer un algorithme carrément chaud', 'tu dois afficher les nombres paires', 'voici ce qui sort de ton algorithme : [7, 6, 5, 4, 3, 2, 1]');

    this.allowNextAlgo();
    this.algoList.push(algo1, algo2, algo3, algo4, algo5);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.allowPreviousAlgo();
      this.displayButtonNextAlgo = false;
      // tslint:disable-next-line: radix
      this.currentAlgoIndex = this.algoList.findIndex((algo) => (algo.id === parseInt(params.get('id'))));
      this.currentAlgo = this.algoList[this.currentAlgoIndex];
    });
    setInterval(() => {
      this.allowPreviousAlgo();
    }, 100);
  }
}
