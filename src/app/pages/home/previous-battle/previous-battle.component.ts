import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/classes/battle';

@Component({
  selector: 'btd-previous-battle',
  templateUrl: './previous-battle.component.html',
  styleUrls: ['./previous-battle.component.scss']
})
export class PreviousBattleComponent implements OnInit {
  constructor() { }
  battleList: Battle[] = [];

  ngOnInit(): void {
  this.battleList.push(
    new Battle(
      'Battle1',
      new Date('2020-03-26'),
      60
      ),
      new Battle(
        'Battle2',
        new Date('2020-03-14'),
        60
        ),
      new Battle(
        'Battle3',
        new Date('2020-03-06'),
        60
        )
  );
  }
}
