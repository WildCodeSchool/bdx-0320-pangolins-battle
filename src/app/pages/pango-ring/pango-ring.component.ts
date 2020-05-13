import { Component, OnInit, OnChanges } from '@angular/core';
import { Algo } from '../../classes/algo-list';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BattlesService } from '../../shared/services/battles/battles.service';
import { AlgorithmService } from '../../shared/services/algorithm/algorithm.service';
import { BattlesListService } from '../../shared/services/battles-list/battles-list.service';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';
import { BattleTimerService } from '../../shared/services/battle-timer/battle-timer.service';


@Component({
  selector: 'btd-pango-ring',
  templateUrl: './pango-ring.component.html',
  styleUrls: ['./pango-ring.component.scss']
})
export class PangoRingComponent implements OnInit, OnChanges {


  constructor(private route: ActivatedRoute,
              private router: Router,
              private algorithmService: AlgorithmService,
              private battleService: BattlesListService,
              private solutionService: SolutionService,
              private battleTimerService: BattleTimerService) { }

  algoIndex: number;
  battle: string;
  currentAlgo: Algo;
  idNextAlgo: number;
  idPrevAlgo: number;
  isNotLastAlgo = true;
  algoSolution: any = {battle: {id: 0}, algo: {id: 0}, code: ''};
  battleId;
  currentBattle;
  timer;
  time;
  timesOut;

  getBattleId(){
    const id = +this.route.snapshot.paramMap.get('BattleId');
    this.battleId = id;
    return this.battleId;
  }

  ngOnChanges(){
  }

  stopTimer(){
    if (this.timer.timer <= 0){
      this.timesOut = false;
      this.router.navigate(['/home']);
      return this.timer = {timer: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
    }
  }

  ngOnInit(): void {
    this.timesOut = true;
    this.time = setInterval(() => {
      this.timer = this.battleTimerService.countTime();
      this.stopTimer();
    }, 100);
    this.getBattleId();
    this.battleService.getAllBattles().subscribe((data) => {
      this.currentBattle = data.filter(battle => battle.id === this.battleId);
      this.algorithmService.getAlgoFromCurrentBattle(this.currentBattle[0].algoList);

      this.route.paramMap.subscribe((paramMap) => {
        this.currentAlgo = this.algorithmService.getAlgorithmById((+paramMap.get('AlgoId')));
        this.algoIndex = this.algorithmService.getAlgoIndex(this.currentAlgo);
        this.idNextAlgo = this.algorithmService.getNextAlgoId(this.algoIndex);
        this.idPrevAlgo = this.algorithmService.getPrevAlgoId(this.algoIndex);
        this.isNotLastAlgo = this.algorithmService.getAlgoIndex(this.currentAlgo) !== 4;
      });
    });
  }
  receiveAlgorithmSolution(codeSolutionAlgo) {
    this.algoSolution.code = codeSolutionAlgo;
  }

  nextAlgo() {
    this.router.navigate(['/pango-ring', this.battleId, this.idNextAlgo]);
  }

  postSolution(){
    // Je renseigne la propriété "solution" pour la poster
    this.algoSolution.battle.id = this.battleId;
    this.algoSolution.algo.id = this.currentAlgo.id;
    this.solutionService.postAlgoSolution(this.algoSolution).subscribe(data => console.log(data));
  }

  goToClassement(){
    this.router.navigate(['/classement']);
  }

  clickOnNextAlgo(){
    this.postSolution();
    this.nextAlgo();
  }

  clickOnClassement(){
    this.postSolution();
    this.goToClassement();
    clearInterval(this.time);
    console.log(this.timer);
  }

  previousAlgo() {
    this.router.navigate(['/pango-ring', this.battleId, this.idPrevAlgo]);
  }

}
