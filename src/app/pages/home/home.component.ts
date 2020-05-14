import { Component, OnInit } from '@angular/core';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';
import { BattleTimerService } from '../../shared/services/battle-timer/battle-timer.service';

@Component({
  selector: 'btd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  battleList = [];

  constructor(private battleAPI: BattlesListService, private userService: UserService, private battleTimerService: BattleTimerService) { }

  initializePage(){
    this.battleAPI.getAllBattles()
    .subscribe(data => this.battleList = data);
  }

  sendBattleStartingDate(startingDate){
    this.battleTimerService.startBattleTimer(startingDate);
  }

  sendBattleSelected(battle){
    this.battleTimerService.getSelectedBattle(battle);
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.initializePage();
  }
}
