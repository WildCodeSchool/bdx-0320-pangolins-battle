import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../../shared/services/algorithm/algorithm.service';
import { NewAlgo } from '../../classes/new-algo';

@Component({
  selector: 'btd-algo-admin',
  templateUrl: './algo-admin.component.html',
  styleUrls: ['./algo-admin.component.scss']
})
export class AlgoAdminComponent implements OnInit {

  algos: NewAlgo [] = [];

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
    const algos$ = this.algorithmService.getAllAlgo();
    algos$.subscribe((algos: NewAlgo[]) =>
    this.algos = algos);
  }

}
