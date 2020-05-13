import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  postSolutionsUrl = 'http://api.witpoc.com/solutions';
  getSolutionsUrl =  'http://api.witpoc.com/solutions/battle/';


  // à la place : requête get sur solutions/battle/{battleId} avec token user (automatique)
  areAlgosFromBattleCompleted = [
    {id: 1, status: "oui"},
    {id: 2, status: "oui"},
    {id: 3, status: "oui"},
    {id: 4, status: "non"},
    {id: 5, status: "non"},
  ]

  constructor(private http: HttpClient) { }

  postAlgoSolution(solution) {
    return this.http.post(this.postSolutionsUrl, solution);
  }
  getSolutions(battleId: number) {
    return this.http.get(this.getSolutionsUrl + `${battleId}`);
  }

}
