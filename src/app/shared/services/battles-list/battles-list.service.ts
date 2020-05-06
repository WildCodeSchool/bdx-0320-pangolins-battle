import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBattle } from './battle-interface';

@Injectable({
  providedIn: 'root'
})
export class BattlesListService {

  constructor(private http: HttpClient) { }

  urlBattleRequest = 'http://api.witpoc.com/battles';
  urlOneBattle = 'http://api.witpoc.com/algos/battle';

  getAllBattles(): Observable <IBattle[]>{
    return this.http.get<IBattle[]>(this.urlBattleRequest);
  }

  generateNewBattle(battle: any){
    return this.http.post(this.urlBattleRequest, battle);
  }

  editBattle(battle: any){
    return this.http.put(this.urlBattleRequest + `/${battle.id}`, battle);
  }

  deleteBattle(battle: any){
    return this.http.delete(this.urlBattleRequest + `/${battle.id}`, battle);
  }

  getOneBattle(id){
    return this.http.get(this.urlOneBattle + `/${id}`);
  }
}
