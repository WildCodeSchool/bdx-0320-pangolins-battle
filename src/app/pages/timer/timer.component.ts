import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btd-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor() { }
  time: number; days: number; hours: number; minutes: number; seconds: number;

  startDate = Date.now();
  endDate = '2020/04/16'; // futur input
  battleHour = 21; // futur input
  battleMinute = 41; // futur input

  battleEndDate = Date.parse(this.endDate) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000);


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

  changeHiddenValue(){
    if (Date.now() >= this.battleEndDate){
      this.timesOut = false;
    }
    return this.timerOut.emit(this.timesOut);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (Date.now() >= this.battleEndDate){
        this.startDate = this.battleEndDate;
      } else {
        this.startDate = Date.now();
      }
      this.nextBattleTimer(this.startDate, this.battleEndDate);
      this.changeHiddenValue();
    }, 100);
  }

}
