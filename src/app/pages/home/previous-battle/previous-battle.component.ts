import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BattlesListService } from '../../../shared/services/battles-list/battles-list.service';

@Component({
  selector: 'btd-previous-battle',
  templateUrl: './previous-battle.component.html',
  styleUrls: ['./previous-battle.component.scss']
})
export class PreviousBattleComponent implements OnInit,  OnChanges {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private battleListService: BattlesListService) { }

  // @Input() battleList: any[];
  battleList;
  @Output() battleSelected = new EventEmitter();
  @Output() battleStart = new EventEmitter();

  displayedBattles = [];
  user;
  // studentSession sera alimenté via un input liée au profil de l'user
  studentSession = new Date('02/03/2020');
  resolutionDelay = 24; // en heures
  startingDate: number;
  toggleDisplay: boolean;

  toggleDisplayElements(){
      if (this.router.url === '/classement'){
        this.toggleDisplay = true;
      } else {
        this.toggleDisplay = false;
      }
  }

  getBattleList(){
    this.battleListService.getAllBattles().subscribe(data => {
      this.battleList = data;
      this.displayPreviousBattle(this.battleList);
    });
  }

  displayPreviousBattle(battleArray){
    this.displayedBattles = battleArray.sort((a, b) => Date.parse(a.launchDate) - Date.parse(b.launchDate))
    // tslint:disable-next-line: max-line-length
    .filter(battle => Date.parse(battle.launchDate) > +this.studentSession && Date.parse(battle.launchDate) < (Date.now() - ( this.resolutionDelay * 3600 * 1000)));
  }

  getUser(){
    this.userService.getCurrentUser().subscribe(data => {
      this.user = data;
    });
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
    this.getBattleList();
    // this.displayPreviousBattle(this.battleList);
  }


  ngOnInit(): void {
    this.toggleDisplayElements();
    this.getBattleList();
    // this.displayPreviousBattle(this.battleList);
    this.getUser();
  }
}
