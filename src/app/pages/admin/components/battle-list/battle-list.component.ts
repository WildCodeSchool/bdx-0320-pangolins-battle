import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewBattle } from '../../../../classes/new-battle';
import { BattlesListService } from '../../../../shared/services/battles-list/battles-list.service';
import * as moment from 'moment';

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
  sendBattle: NewBattle = {id: 0, name: '', launchDate: new Date(), duration: 0, level: 0};
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
    this.sendBattle = {
      id: this.targetedBattle.id,
      name: this.targetedBattle.name,
      launchDate: this.targetedBattle.launchDate,
      duration: this.targetedBattle.duration * 60,
      level: this.targetedBattle.level
    };
    this.battleAPI.generateNewBattle(this.sendBattle).subscribe(() => {
      this.initializePage();
    });
    this.hidden = true;
    this.resetForm(battleForm);
  }

  editBattle(clickedBattle){
    this.hidden = false;
    this.hiddenButton = false;
    // this.targetedBattle = clickedBattle;
    const convert = moment.duration(clickedBattle.duration);
    const battleDuration = convert.asMinutes();
    // tslint:disable-next-line: max-line-length
    this.targetedBattle = {id: clickedBattle.id, name: clickedBattle.name, launchDate: clickedBattle.launchDate, duration: battleDuration, level: 0};
  }

  validEditBattle(clickedBattle, battleForm){
    this.sendBattle = {
      id: this.targetedBattle.id,
      name: this.targetedBattle.name,
      launchDate: this.targetedBattle.launchDate,
      duration: this.targetedBattle.duration * 60,
      level: this.targetedBattle.level
    };
    this.battleAPI.editBattle(this.sendBattle).subscribe(() => {
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
