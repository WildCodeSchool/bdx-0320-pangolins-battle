import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattlesService {

  battle = 'Battle 1';

  constructor() { }

  getBattle(){
    return this.battle;
  }
}
