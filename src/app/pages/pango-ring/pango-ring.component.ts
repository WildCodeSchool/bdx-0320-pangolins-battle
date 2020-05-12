import { Component, OnInit } from '@angular/core';
import { Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';
import { AlgorithmService } from '../../shared/services/algorithm/algorithm.service';
import { BattlesListService } from '../../shared/services/battles-list/battles-list.service';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';


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
              private battleService: BattlesListService,
              private solutionService: SolutionService) { }

  algoIndex: number;
  battle: string;
  currentAlgo: Algo;
  idNextAlgo: number;
  idPrevAlgo: number;
  isNotLastAlgo: boolean = true;
  algoSolution: any = {battle: {id:0}, algo: {id: 0}, code:''};
            /*   "battle": {
                "id": 387

            },
            "algo": {
                    "id": 389
                },
                "code":"()=>{console.log('toto');}" */
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
  receiveAlgorithmSolution(codeSolutionAlgo) {
    this.algoSolution.code = codeSolutionAlgo;
  }
  nextAlgoOrClassement() {
    for (let i = 0; i < 4; i++) {
      if (this.currentBattle[0].algoList[i]) {
        this.router.navigate(['/pango-ring', this.battleId, this.idNextAlgo]);
      } else {
        this.isNotLastAlgo = false;
        this.router.navigateByUrl('classement');
      }
    }
    // Je renseigne la propriété "solution" pour la poster
    this.algoSolution.battle.id = this.battleId;
    this.algoSolution.algo.id = this.algorithmService.getAlgoFromCurrentBattle(this.currentBattle[0].algoList[0].id);
    this.solutionService.postAlgoSolution(this.algoSolution).subscribe(data => console.log(data));

  }
  previousAlgo() {
    this.router.navigate(['/pango-ring', this.battleId, this.idPrevAlgo]);
  }
}
