import { Component, OnInit } from '@angular/core';
import { Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';
import { AlgorithmService } from 'src/app/shared/services/algorithm/algorithm.service';

@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router,
              public battles: BattlesService,
              private algorithmService: AlgorithmService) { }

  algoIndex: number;
  battle: string;
  currentAlgo: Algo;
  idNextAlgo: number;
  idPrevAlgo: number;

  ngOnInit(): void {


    this.route.paramMap.subscribe((paramMap) => {
      this.currentAlgo = this.algorithmService.getAlgorithmById((+paramMap.get('id')));
      this.algoIndex = this.algorithmService.getAlgoIndex(this.currentAlgo);
      this.idNextAlgo = this.algorithmService.getNextAlgoId(this.algoIndex);
      this.idPrevAlgo = this.algorithmService.getPrevAlgoId(this.algoIndex);
    });

    this.battle = this.battles.getBattle();
  }



  nextAlgo() {
    this.router.navigate(['pango-ring', this.idNextAlgo]);
  }
  previousAlgo() {
    this.router.navigate(['pango-ring', this.idPrevAlgo]);
  }

}
