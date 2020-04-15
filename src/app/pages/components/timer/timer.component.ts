import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btd-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor() { }
  time: number; days: number; hours: number; minutes: number; seconds: number;

  startDate = Date.now();
  endDate = '2020/04/20';
  battleHour = 14;
  battleMinute = 34;

  timesOut = false;


  nextBattleTimer(startDate, endDate) {
    this.time = Date.parse(endDate) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000) - startDate;
    this.seconds = Math.floor( (this.time / 1000) % 60 );
    this.minutes = Math.floor( (this.time / 1000 / 60) % 60 );
    this.hours = Math.floor( (this.time / (1000 * 60 * 60)) % 24 );
    this.days = Math.floor( this.time / (1000 * 60 * 60 * 24) );
    return {time: this.time, days: this.days, hours: this.hours, minutes: this.minutes, seconds: this.seconds };
  }



  ngOnInit(): void {
    setInterval(() => {
       if (Date.now() >= (Date.parse(this.endDate) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000))){
         this.startDate = Date.parse(this.endDate) + (this.battleHour * 3600 * 1000) + (this.battleMinute * 60 * 1000);
       } else {
         this.startDate = Date.now();
      }
       this.nextBattleTimer(this.startDate, this.endDate); }, 1000);
  }
}
