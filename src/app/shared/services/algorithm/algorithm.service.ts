import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Algo } from '../../../classes/algo-list';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  algorithms;

  private BASE_URL = 'http://api.witpoc.com/algos';

  constructor(private httpClient: HttpClient) { }

  getAlgoFromCurrentBattle(algoList){
    return this.algorithms = algoList;
  }

  getAlgorithmById(id: number) {
    return this.algorithms.find((algorithm) => algorithm.id === id);
  }
  getAlgoIndex(algo: Algo) {
    return this.algorithms.findIndex((a) => a.id === algo.id);
  }
  getNextAlgoId(algoIndex: number){
    if (algoIndex < this.algorithms.length - 1){
      return this.algorithms[algoIndex + 1].id;
    }
  }

  getPrevAlgoId(algoIndex: number){
    if (algoIndex > 0){
      return this.algorithms[algoIndex - 1].id;
    }
  }
  getAllAlgorithm(): Algo[] {
    return this.algorithms;
  }


  // requêtes http mandy
  getAllAlgo(): Observable<object>{
    return this.httpClient.get<object>(this.BASE_URL);
  }

  editAlgo(algo: any){
    return this.httpClient.put(this.BASE_URL + `/${algo.id}`, algo);
  }

}
