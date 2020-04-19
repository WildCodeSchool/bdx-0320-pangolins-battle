import { Component, OnInit } from '@angular/core';
import { Algo as Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';

@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {
  // Ce tableau contiendra 5 objets. Chaque objet contiendra : un ID, instructions, input-solution, output-validation.
  algo: Algo[] = [];
  battle: string;
  currentAlgo: any;
  currentAlgoIndex: number;

  constructor(private route: ActivatedRoute, public battles: BattlesService) { }

  ngOnInit(): void {
    const algo1 = new Algo (1, 'tu dois rentrer un algorithme simple', 'tu dois ranger ce tableau dans l\'ordre décroissant: [1, 2, 3]', '[3, 2, 1]');
    const algo2 = new Algo (2, 'tu dois rentrer un algorithme un peu moins simple', 'tu dois afficher le dernier numéro du tableau [1, 2, 3, 4]', '4');
    const algo3 = new Algo (3, 'tu dois rentrer un algorithme délicat', 'tu dois afficher le premier numéro: [1, 2, 3, 4, 5]', '1');
    const algo4 = new Algo (4, 'tu dois rentrer un algorithme plus délicat', 'tu dois afficher la troisième entrée du tableau suivant : [1, 2, 3, 4, 5, 6]', '3');
    const algo5 = new Algo (5, 'tu dois rentrer un algorithme carrément chaud', 'tu dois afficher les nombres paires', 'voici ce qui sort de ton algorithme : [7, 6, 5, 4, 3, 2, 1]');

    this.algo.push(algo1, algo2, algo3, algo4, algo5);
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      this.currentAlgoIndex = this.algo.findIndex((algo) => (algo.id === parseInt(params.get('id'))));
      this.currentAlgo = this.algo[this.currentAlgoIndex];
    });

    this.battle = this.battles.getBattle();
  }


}
