import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  unclickable = true;

  constructor() { }

  display(timesOut: boolean){
    return this.unclickable = timesOut;
  }
  ngOnInit(): void {
    this.display(this.unclickable);
  }
}
