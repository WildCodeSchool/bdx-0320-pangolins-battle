import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattlesService {

  battle = 'Spider battle';

  constructor() { }

  getBattle(){
    return this.battle;
  }
}
