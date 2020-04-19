import { Component, OnInit } from '@angular/core';
import { Algo as Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';
import { AlgorithmService } from 'src/app/shared/services/algorithm/algorithm.service';

@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {
  // Ce tableau contiendra 5 objets. Chaque objet contiendra : un ID, instructions, input-solution, output-validation.
  public algo: any = ''; // à tenter avec le type Algo (sans initialisation du coup..)
  battle: string;
  currentAlgo: any;
  currentAlgoIndex: number;





  constructor(private route: ActivatedRoute, public battles: BattlesService, public algorithmService: AlgorithmService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => (
    this.algo = this.algorithmService.getAlgorithmById(+paramMap.get('id'))));

    this.currentAlgo = this.algo[this.currentAlgoIndex];
    this.battle = this.battles.getBattle();
  }

}
