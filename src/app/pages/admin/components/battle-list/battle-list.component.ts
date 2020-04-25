import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewBattle } from '../../../../classes/new-battle';
import { BattlesListService } from '../../../../shared/services/battles-list/battles-list.service';

@Component({
  selector: 'btd-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.scss']
})
export class BattleListComponent implements OnInit {

  constructor(private battleAPI: BattlesListService) { }

  // FORM;
  display = true;
  targetedBattle: NewBattle = {name: '', launchDate: new Date(), duration: 0, level: 0};

  // TABLE with API
  battleList = [];

  initializePage(){
    this.battleAPI.getAllBattles()
    .subscribe(data => this.battleList = data);
  }

  resetForm(form: NgForm){
    form.resetForm();
  }

  ngOnInit(): void {
    this.initializePage();
  }

  createNewBattle(battleForm: NgForm){
    this.battleAPI.generateNewBattle(this.targetedBattle).subscribe(() => {
      this.initializePage();
    });
    this.display = true;
    this.resetForm(battleForm);
  }

  editBattle(clickedBattle){
    this.targetedBattle = clickedBattle;
    this.display = false;
    // code inutile, je ne comprends pas l'impact
    this.battleAPI.editBattle(clickedBattle).subscribe(() => {
        this.initializePage();
      });
    }

    deleteBattle(clickedBattle){
      this.battleAPI.deleteBattle(clickedBattle).subscribe(() => {
        this.initializePage();
      });
    }

    displayForm(battleForm: NgForm){
      this.display = !this.display;
      this.resetForm(battleForm);
      this.initializePage();
  }

}
