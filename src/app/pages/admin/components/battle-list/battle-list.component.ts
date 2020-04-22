import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/classes/battle';
import { NewBattle } from 'src/app/classes/new-battle';

@Component({
  selector: 'btd-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.scss']
})
export class BattleListComponent implements OnInit {

  constructor() { }
  // battleList: any[] = [];
  battleList: any[] = [
    new Battle('Battle1', new Date('2020/04/30'), 60),
    new Battle('Battle2', new Date('2020/04/15'), 60),
    new Battle('Battle3', new Date('2020/03/31'), 60),
    new Battle('Battle4', new Date('2020/02/24'), 60),
  ];
  display = true;
  model: NewBattle = new NewBattle();
  name = '';
  createdBy = '';
  startingDate = new Date();
  givenTime = 60;

  ngOnInit(): void {
  }
  createNewBattle(){
    this.battleList.push(new Battle(this.model.name, this.model.startingDate, this.model.givenTime));
    this.display = true;
  }
  displayForm(){
    this.display = !this.display;
  }

}
