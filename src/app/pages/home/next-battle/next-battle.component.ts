import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btd-next-battle',
  templateUrl: './next-battle.component.html',
  styleUrls: ['./next-battle.component.scss']
})
export class NextBattleComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() battleList: any[];

  title = 'Prochaine Battle';
  hidden = true;
  timedBattleList = [];
  nextBattle;




  sendBattleId(){
    this.router.navigate(['/pango-ring', this.nextBattle[0].id, this.nextBattle[0].algoList[0].id]);
  }

  selectNextBattle(endDate){
    return this.nextBattle = endDate;
  }

  display(timesOut: boolean){
    return this.hidden = timesOut;
  }

  ngOnInit(): void {
  this.display(this.hidden);
  }

}
