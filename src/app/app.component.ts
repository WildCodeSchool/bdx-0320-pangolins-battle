import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'btd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'battledev';
  date1: Date;
  displayNavAndFooter = true;
  constructor(private route: ActivatedRoute) {}

/*   isNavAndFooterDisplayed() {
  const emptyPath = this.route.paramMap.subscribe((param) => {
    (JSON.stringify(param.get('')));
  });
  if (emptyPath === '') {
    this.displayNavAndFooter = false;
  } else {
    this.displayNavAndFooter = true;

  }
} */
}
