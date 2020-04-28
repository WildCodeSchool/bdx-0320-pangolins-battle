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
  hidden = true;
  hiddenButton = true;
  targetedBattle: NewBattle = {id: 0, name: '', launchDate: new Date(), duration: 0, level: 0};
  emptyBattle: NewBattle = {id: 0, name: '', launchDate: new Date(), duration: 0, level: 0};

  // TABLE with API
  battleList = [];

  initializePage(){
    this.battleAPI.getAllBattles()
    .subscribe(data => this.battleList = data);
  }

  resetForm(form: NgForm){
    form.resetForm();
    this.targetedBattle = this.emptyBattle;
  }

  ngOnInit(): void {
    this.initializePage();
  }

  createNewBattle(battleForm: NgForm){
    this.battleAPI.generateNewBattle(this.targetedBattle).subscribe(() => {
      this.initializePage();
    });
    this.hidden = true;
    this.resetForm(battleForm);
  }

  editBattle(clickedBattle){
    this.hidden = false;
    this.hiddenButton = false;
    this.targetedBattle = clickedBattle;
  }

  validEditBattle(clickedBattle, battleForm){
    this.battleAPI.editBattle(clickedBattle).subscribe(() => {
        this.initializePage();
        this.hidden = true;
        this.hiddenButton = true;
        this.resetForm(battleForm);
      });
    }

    deleteBattle(clickedBattle){
      this.battleAPI.deleteBattle(clickedBattle).subscribe(() => {
        this.initializePage();
      });
    }

    displayForm(battleForm: NgForm){
      this.hiddenButton = true;
      this.hidden = !this.hidden;
      this.resetForm(battleForm);
      this.initializePage();
  }
}
