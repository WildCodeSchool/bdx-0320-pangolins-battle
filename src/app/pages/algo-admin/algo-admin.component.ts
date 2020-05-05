import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../../shared/services/algorithm/algorithm.service';
import { NewAlgo } from '../../classes/new-algo';
import { BattlesListService } from '../../shared/services/battles-list/battles-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'btd-algo-admin',
  templateUrl: './algo-admin.component.html',
  styleUrls: ['./algo-admin.component.scss']
})
export class AlgoAdminComponent implements OnInit {

  algos: any;
  hideEditForm: boolean;
  algoToEdit: NewAlgo;
  editValid: boolean;
  id: number;

  constructor(private route: ActivatedRoute, private algorithmService: AlgorithmService, private serviceBattle: BattlesListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getAlgosOneBattle();
  }

  getAlgosOneBattle(){
    this.serviceBattle.getOneBattle(this.id).subscribe(algos =>
      {
        this.algos = algos;
      });
  }

  hideForm(isHidden){
    this.hideEditForm = isHidden;
  }

  sendAlgo(editedAlgo){
    this.algoToEdit = editedAlgo;
  }

  changeColorCheck(isValid){
    this.editValid = isValid;
  }

  updateAlgoApi(finalAlgo){
    this.algorithmService.editAlgo(finalAlgo).subscribe(() => {
      this.getAlgosOneBattle();
    });
  }
}
