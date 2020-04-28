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
  hideEditForm: boolean;
  algoToEdit: NewAlgo;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit(): void {
    this.initializeAlgoList();
  }

  initializeAlgoList(){
    const algos$ = this.algorithmService.getAllAlgo();
    algos$.subscribe((algos: NewAlgo[]) =>
    this.algos = algos);
  }


  hideForm(isHidden){
    this.hideEditForm = isHidden;
  }

  sendAlgo(editedAlgo){
    this.algoToEdit = editedAlgo;
  }

  updateAlgoApi(finalAlgo){
    this.algorithmService.editAlgo(finalAlgo).subscribe(() => {
      this.initializeAlgoList();
    });
  }
}
