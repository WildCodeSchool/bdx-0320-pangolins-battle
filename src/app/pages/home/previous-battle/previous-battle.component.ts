import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'btd-previous-battle',
  templateUrl: './previous-battle.component.html',
  styleUrls: ['./previous-battle.component.scss']
})
export class PreviousBattleComponent implements OnInit,  OnChanges {
  constructor(private userService: UserService, private router: Router) { }

  @Input() battleList: any[];
  @Output() battleSelected = new EventEmitter();
  @Output() battleStart = new EventEmitter();

  displayedBattles = [];
  user;
  // studentSession sera alimenté via un input liée au profil de l'user
  studentSession = new Date('02/03/2020');
  resolutionDelay = 24; // en heures
  startingDate: number;

  displayPreviousBattle(battleArray){
    this.displayedBattles = battleArray.sort((a, b) => Date.parse(a.launchDate) - Date.parse(b.launchDate))
    // tslint:disable-next-line: max-line-length
    .filter(battle => Date.parse(battle.launchDate) > +this.studentSession && Date.parse(battle.launchDate) < (Date.now() - ( this.resolutionDelay * 3600 * 1000)));
  }

  getUser(){
    this.user = this.userService.getCurrentUser();
  }

  sendSelectedBattle(battle){
    this.battleSelected.emit(battle);
  }

  sendBattleStartingDate(){
    this.startingDate = Date.now();
    this.battleStart.emit(this.startingDate);
  }

  sendBattleId(battle){
    this.router.navigate(['/pango-ring', battle.id, battle.algoList[0].id]);
  }

  sendElements(battle){
    this.sendBattleId(battle);
    this.sendSelectedBattle(battle);
    this.sendBattleStartingDate();
  }

  ngOnChanges(){
    this.displayPreviousBattle(this.battleList);
  }


  ngOnInit(): void {
    this.displayPreviousBattle(this.battleList);
    this.getUser();
  }
}
