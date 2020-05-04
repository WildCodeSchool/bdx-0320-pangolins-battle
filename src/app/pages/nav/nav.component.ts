import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'btd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  unclickable = true;
  user: User;
  admin: boolean;

  constructor(private userService: UserService) { }

  display(timesOut: boolean){
    return this.unclickable = timesOut;
  }
  ngOnInit(): void {
    this.display(this.unclickable);
  }

  isAdmin() {
    if (this.user.main_role === 'trainer') {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
}
