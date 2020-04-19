import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
  algorithms = [
    {id: 1, instruction: 'tu dois ranger ce tableau dans l\'ordre décroissant: [1, 2, 3]', solution: '[3, 2, 1]'},
    {id: 2, instruction: 'tu dois afficher le dernier numéro du tableau [1, 2, 3, 4]', solution: '4'},
    {id: 3, instruction: 'tu dois afficher le premier numéro: [1, 2, 3, 4, 5]', solution: '1'},
    {id: 4, instruction: 'tu dois afficher la troisième entrée du tableau suivant : [1, 2, 3, 4, 5, 6]', solution: '3'},
    {id: 5, instruction: 'tu dois afficher les nombres paires', solution: '[7, 6, 5, 4, 3, 2, 1]'},
  ];
  constructor() { }
  getAlgorithmById(id: number){
    return this.algorithms.find((algorithm) => algorithm.id === id);
  }
}

