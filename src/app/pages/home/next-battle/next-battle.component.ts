import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btd-next-battle',
  templateUrl: './next-battle.component.html',
  styleUrls: ['./next-battle.component.scss']
})
export class NextBattleComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() battleList: any[];
  @Output() battleStart = new EventEmitter();
  @Output() battleSelected = new EventEmitter();

  title = 'Prochaine Battle';
  hidden = true;
  timedBattleList = [];
  nextBattle;
  startingDate: number;


  sendBattleStartingDate(){
    this.startingDate = Date.now();
    this.battleStart.emit(this.startingDate);
  }

  sendSelectedBattle(){
    this.battleSelected.emit(this.nextBattle);
  }

  sendBattleId(){
    this.router.navigate(['/pango-ring', this.nextBattle[0].id, this.nextBattle[0].algoList[0].id]);
  }

  sendElements(){
    this.sendBattleStartingDate();
    this.sendBattleId();
    this.sendSelectedBattle();
  }

  selectNextBattle(battle){
    return this.nextBattle = battle;
  }

  display(timesOut: boolean){
    return this.hidden = timesOut;
  }


  ngOnInit(): void {
    this.display(this.hidden);
  }

}
