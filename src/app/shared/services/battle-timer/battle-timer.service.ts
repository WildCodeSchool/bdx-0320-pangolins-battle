import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BattleTimerService {
  startTime: number;
  endTime: number;
  timer: any;
  counter: number;
  battleDuration: number;
  selectedBattle;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  chrono;

  constructor() { }

  startBattleTimer(startingDate){
    this.startTime = startingDate;
    return this.startTime;
  }

  countTime(){
    this.timer = ((this.battleDuration) * 60 * 1000) + this.startTime - Date.now();
    this.milliseconds = Math.floor( (this.timer % 1000) / 100 );
    this.seconds = Math.floor( (this.timer / 1000) % 60 );
    this.minutes = Math.floor( (this.timer / 1000 / 60) % 60 );
    this.hours = Math.floor( (this.timer / (1000 * 60 * 60)) % 24 );
    // tslint:disable-next-line: max-line-length
    return this.chrono = {timer: this.timer, hours: this.hours, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds };
    // return this.timer;
  }

  convertBattleDuration(battleDuration){
    const convert = moment.duration(battleDuration);
    this.battleDuration = convert.asMinutes();
  }

  getSelectedBattle(battle){
    this.selectedBattle = battle;
    if (Array.isArray(this.selectedBattle)){
      this.convertBattleDuration(this.selectedBattle[0].duration);
    } else {
      this.convertBattleDuration(this.selectedBattle.duration);
    }
    return this.selectedBattle;
  }

  endBattleTimer(){
    this.endTime = Date.now();
  }

}
