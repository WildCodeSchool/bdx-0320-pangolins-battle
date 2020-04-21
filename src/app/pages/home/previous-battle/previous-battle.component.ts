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
      1,
      'Battle1',
      2,
      'Fabien',
      '',
      new Date('2020-03-26'),
      5,
      60
      ),
      new Battle(
        2,
        'Battle2',
        2,
        'Pierre-Louis',
        '',
        new Date('2020-03-14'),
        5,
        60
        ),
      new Battle(
        3,
        'Battle3',
        2,
        'Mandy',
        '',
        new Date('2020-03-06'),
        5,
        60
        )
  );
  }
}
