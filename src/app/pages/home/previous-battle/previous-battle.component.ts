import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btd-previous-battle',
  templateUrl: './previous-battle.component.html',
  styleUrls: ['./previous-battle.component.scss']
})
export class PreviousBattleComponent implements OnInit {
  constructor() { }
  @Input() battleList: any[];
  displayedBattles = [];

  // studentSession sera alimenté via un input liée au profil de l'user
  studentSession = new Date('02/03/2020');
  resolutionDelay = 24; // en heures

ngOnInit(): void {
  setTimeout(() => {
      this.displayedBattles = this.battleList.sort((a, b) => Date.parse(a.launchDate) - Date.parse(b.launchDate))
      // tslint:disable-next-line: max-line-length
      .filter(battle => Date.parse(battle.launchDate) > +this.studentSession && Date.parse(battle.launchDate) < (Date.now() - ( this.resolutionDelay * 3600 * 1000)))
      ; }, 500);
  }
}
