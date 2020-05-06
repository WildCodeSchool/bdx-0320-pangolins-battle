import { Component, OnInit } from '@angular/core';
import { Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';
import { AlgorithmService } from '../../shared/services/algorithm/algorithm.service';
import { BattlesListService } from '../../shared/services/battles-list/battles-list.service';


@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router,
              public battles: BattlesService,
              private algorithmService: AlgorithmService,
              private battleService: BattlesListService) { }

  algoIndex: number;
  battle: string;
  currentAlgo: Algo;
  idNextAlgo: number;
  idPrevAlgo: number;

  battleId;
  currentBattle;

  getBattleId(){
    const id = +this.route.snapshot.paramMap.get('BattleId');
    this.battleId = id;
    return this.battleId;
  }

  ngOnInit(): void {
    this.getBattleId();
    this.battleService.getAllBattles().subscribe((data) => {
      this.currentBattle = data.filter(battle => battle.id === this.battleId);
      this.algorithmService.getAlgoFromCurrentBattle(this.currentBattle[0].algoList);


      this.route.paramMap.subscribe((paramMap) => {
        this.currentAlgo = this.algorithmService.getAlgorithmById((+paramMap.get('AlgoId')));
        this.algoIndex = this.algorithmService.getAlgoIndex(this.currentAlgo);
        this.idNextAlgo = this.algorithmService.getNextAlgoId(this.algoIndex);
        this.idPrevAlgo = this.algorithmService.getPrevAlgoId(this.algoIndex);
      });


    });



    this.battle = this.battles.getBattle();
  }



  nextAlgo() {
    // this.router.navigate(['pango-ring', this.idNextAlgo]);
    this.router.navigate(['/pango-ring', this.battleId, this.idNextAlgo]);
  }
  previousAlgo() {
    // this.router.navigate(['pango-ring', this.idPrevAlgo]);
    this.router.navigate(['/pango-ring', this.battleId, this.idPrevAlgo]);
  }

}
