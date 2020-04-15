import { Component, OnInit } from '@angular/core';
import { AlgoList } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {
  // Ce tableau contiendra 5 objets. Chaque objet contiendra : un ID, instructions, input-solution, output-validation.
  algoList: AlgoList[] = [];

  currentAlgo: any;
  currentAlgoIndex: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const algo1 = new AlgoList (1, 'tu dois rentrer un algorithme simple', 'voici ce qui entre dans ton algorithme : [1, 2, 3]', 'voici ce qui sort de ton algorithme : [3, 2, 1]');
    const algo2 = new AlgoList (2, 'tu dois rentrer un algorithme un peu moins simple', 'voici ce qui entre dans ton algorithme : [1, 2, 3, 4]', 'voici ce qui sort de ton algorithme : [4, 3, 2, 1]');
    const algo3 = new AlgoList (3, 'tu dois rentrer un algorithme délicat', 'voici ce qui entre dans ton algorithme : [1, 2, 3, 4, 5]', 'voici ce qui sort de ton algorithme : [5, 4, 3, 2, 1]');
    const algo4 = new AlgoList (4, 'tu dois rentrer un algorithme plus délicat', 'voici ce qui entre dans ton algorithme : [1, 2, 3, 4, 5, 6]', 'voici ce qui sort de ton algorithme : [6, 5, 4, 3, 2, 1]');
    const algo5 = new AlgoList (5, 'tu dois rentrer un algorithme carrément chaud', 'voici ce qui entre dans ton algorithme : [1, 2, 3, 4, 5, 6, 7]', 'voici ce qui sort de ton algorithme : [7, 6, 5, 4, 3, 2, 1]');

    this.algoList.push(algo1, algo2, algo3, algo4, algo5);
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      this.currentAlgoIndex = this.algoList.findIndex((algo) => (algo.id === parseInt(params.get('id'))));
      this.currentAlgo = this.algoList[this.currentAlgoIndex];
    });
  }


}
