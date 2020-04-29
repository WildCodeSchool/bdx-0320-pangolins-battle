import { Component, OnInit } from '@angular/core';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';

@Component({
  selector: 'btd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private battleAPI: BattlesListService) { }

  battleList = [];

  initializePage(){
    this.battleAPI.getAllBattles()
    .subscribe(data => this.battleList = data);
  }

  ngOnInit(): void {
    this.initializePage();
  }
}
