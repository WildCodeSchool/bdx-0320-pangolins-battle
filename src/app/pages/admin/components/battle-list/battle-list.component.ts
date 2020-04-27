import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/classes/battle';
import { NewBattle } from 'src/app/classes/new-battle';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'btd-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.scss']
})
export class BattleListComponent implements OnInit {

  constructor(private battleAPI: BattlesListService) { }

  // FORM;
  hidden = true;
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
    this.hidden = true;
    this.resetForm(battleForm);
  }

  // Erreur, soit sur le server, soit dans le code, voir avec Hugo
  editBattle(clickedBattle){
    this.hidden = false;
    this.targetedBattle = clickedBattle;
  }

  validEditBattle(clickedBattle){
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
      this.hidden = !this.hidden;
      this.resetForm(battleForm);
      this.initializePage();
  }

}
