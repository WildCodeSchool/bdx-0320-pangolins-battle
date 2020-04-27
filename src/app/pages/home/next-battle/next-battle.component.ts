import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btd-next-battle',
  templateUrl: './next-battle.component.html',
  styleUrls: ['./next-battle.component.scss']
})
export class NextBattleComponent implements OnInit {
  @Input() battleList: any[];
  title = 'Prochaine Battle';
  constructor() { }
  hidden = true;
  timedBattleList = [];



  display(timesOut: boolean){
    return this.hidden = timesOut;
  }

  ngOnInit(): void {
  this.display(this.hidden);
  }

}
