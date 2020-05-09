import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  solutionUrl = 'http://api.witpoc.com/solutions'

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
    return this.http.post(this.solutionUrl, solution);
  }

}
