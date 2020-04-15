import { Component, OnInit } from '@angular/core';
import { AlgoList } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BattlesService } from '../../services/battles/battles.service';

@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {
  // Ce tableau contiendra 5 objets. Chaque objet contiendra : un ID, instructions, input-solution, output-validation.
  algoList: AlgoList[] = [];
  battle: string;
  currentAlgo: any;
  currentAlgoIndex: number;

  constructor(private route: ActivatedRoute, public battles: BattlesService) { }

  ngOnInit(): void {
    const algo1 = new AlgoList (1, 'tu dois rentrer un algorithme simple', 'tu dois ranger ce tableau dans l\'ordre décroissant: [1, 2, 3]', '[3, 2,');
    const algo2 = new AlgoList (2, 'tu dois rentrer un algorithme un peu moins simple', 'tu dois afficher le dernier numéro du tableau [1, 2, 3, 4]', '4');
    const algo3 = new AlgoList (3, 'tu dois rentrer un algorithme délicat', 'tu dois afficher le premier numéro: [1, 2, 3, 4, 5]', '1');
    const algo4 = new AlgoList (4, 'tu dois rentrer un algorithme plus délicat', 'tu dois afficher la troisième entrée du tableau suivant : [1, 2, 3, 4, 5, 6]', '3');
    const algo5 = new AlgoList (5, 'tu dois rentrer un algorithme carrément chaud', 'tu dois afficher les nombres paires', 'voici ce qui sort de ton algorithme : [7, 6, 5, 4, 3, 2, 1]');

    this.algoList.push(algo1, algo2, algo3, algo4, algo5);
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      this.currentAlgoIndex = this.algoList.findIndex((algo) => (algo.id === parseInt(params.get('id'))));
      this.currentAlgo = this.algoList[this.currentAlgoIndex];
    });

    this.battle = this.battles.getBattle();
  }


}
