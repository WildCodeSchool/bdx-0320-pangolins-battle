import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'btd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'battledev';
  date1: Date;
  displayNavAndFooter = true;
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;
  }
}
