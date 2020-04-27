import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';

@Component({
  selector: 'btd-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor() { }
  @Input() battleList: any[];

  time: number; days: number; hours: number; minutes: number; seconds: number;

  startDate = Date.now();
  endDate = [];
  battleHour = 19; // futur input ou mis en dur ?
  battleMinute = 0; // futur input ou mis en dur ?
  resolutionDelay = 24;

  battleEndDate: number;

  @Output() timerOut = new EventEmitter();
  timesOut = true;

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

    selectNextBattle(){
      this.endDate = this.battleList
      .filter(battle => (+battle.launchDate > (Date.now() - this.resolutionDelay * 3600 * 1000)))
      .sort((a, b) => (a.launchDate) - (b.launchDate));
      // tslint:disable-next-line: max-line-length
      return this.battleEndDate = (this.endDate[0].launchDate - 2 * 3600 * 1000) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000);
    }


    ngOnInit(): void {
      setTimeout(() => {
        this.selectNextBattle();
        setInterval(() => {
          if (Date.now() >= this.battleEndDate){
            this.startDate = this.battleEndDate;
          } else {
            this.startDate = Date.now();
          }
          this.nextBattleTimer(this.startDate, this.battleEndDate);
          this.changeHiddenValue(this.battleEndDate);
        }, 100);

      }, 500);
    }
  }
