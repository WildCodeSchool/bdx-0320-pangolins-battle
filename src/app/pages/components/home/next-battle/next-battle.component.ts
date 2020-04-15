import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btd-next-battle',
  templateUrl: './next-battle.component.html',
  styleUrls: ['./next-battle.component.scss']
})
export class NextBattleComponent implements OnInit {
  title = 'Next Battle';
  constructor() { }
  displayed: boolean;

  display(timesOut: boolean){
    return this.displayed = timesOut;
  }
  ngOnInit(): void {
  }

}
