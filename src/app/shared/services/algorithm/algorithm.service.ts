import { Injectable } from '@angular/core';
import { Algo } from 'src/app/classes/algo-list';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
  algorithms = [
    new Algo(1, 'tu dois ranger ce tableau dans l\'ordre décroissant: [1, 2, 3]', [1, 2, 3], '[3,2,1]'),
    new Algo(2, 'tu dois afficher le dernier numéro du tableau [1, 2, 3, 4]', [1, 2, 3, 4], '4'),
    new Algo(3, 'tu dois afficher le premier numéro: [1, 2, 3, 4, 5]', [1, 2, 3, 4, 5], '1'),
    new Algo(4, 'tu dois afficher la troisième entrée du tableau suivant : [1, 2, 3, 4, 5, 6]', [1, 2, 3, 4, 5, 6], '3'),
    new Algo(5, 'tu dois afficher les nombres paires [7, 6, 5, 4, 3, 2, 1]', [7, 6, 5, 4, 3, 2, 1], '[6,4,2]'),
  ];
  constructor() { }

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
}

