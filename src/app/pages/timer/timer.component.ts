import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'btd-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {
  constructor() {
  }

  time: number; days: number; hours: number; minutes: number; seconds: number;

  startDate = Date.now();
  endDate = [];
  battleHour = 10; // futur input ou mis en dur ?
  battleMinute = 0; // futur input ou mis en dur ?
  resolutionDelay = 24;

  battleEndDate: number;

  @Input() battleList: any[];
  @Output() timerOut = new EventEmitter();
  @Output() nextBattle = new EventEmitter();
  timesOut = true;

  ngOnChanges(){
    this.startTimer(this.battleList);
  }

  nextBattleTimer(startingDate, endingDate) {
    this.time = endingDate - startingDate;
    this.seconds = Math.floor( (this.time / 1000) % 60 );
    this.minutes = Math.floor( (this.time / 1000 / 60) % 60 );
    this.hours = Math.floor( (this.time / (1000 * 60 * 60)) % 24 );
    this.days = Math.floor( this.time / (1000 * 60 * 60 * 24) );
    return {time: this.time, days: this.days, hours: this.hours, minutes: this.minutes, seconds: this.seconds };
  }

  changeHiddenValue(endDate){
    if (Date.now() >= endDate){
      this.timesOut = false;
    }
    return this.timerOut.emit(this.timesOut);
  }

  sendNextBattle(){
    return this.nextBattle.emit(this.endDate);
  }

  selectNextBattle(battleArray){
    this.endDate = battleArray
    .filter(battle => (Date.parse(battle.launchDate) > (Date.now() - this.resolutionDelay * 3600 * 1000)))
    .sort((a, b) => (Date.parse(a.launchDate)) - (Date.parse(b.launchDate)));
    // tslint:disable-next-line: max-line-length
    return this.battleEndDate = (Date.parse(this.endDate[0].launchDate) - 2 * 3600 * 1000) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000);
  }

  startTimer(battleArray){
    this.selectNextBattle(battleArray);
    setInterval(() => {
      if (Date.now() >= this.battleEndDate){
        this.startDate = this.battleEndDate;
      } else {
        this.startDate = Date.now();
      }
      this.nextBattleTimer(this.startDate, this.battleEndDate);
      this.changeHiddenValue(this.battleEndDate);
      this.sendNextBattle();
    }, 100);
  }

  ngOnInit(): void {
    this.startTimer(this.battleList);
    this.sendNextBattle();
    }
  }
