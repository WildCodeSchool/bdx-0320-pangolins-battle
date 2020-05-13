import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'btd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  unclickable = true;
  user: User;
  admin: boolean;
  hidden = true;

  constructor(private userService: UserService, private router: Router) {}

  display(timesOut: boolean){
    return this.unclickable = timesOut;
  }
  ngOnInit(): void {
    this.user = this.userService.user;
  }


isAdmin() {
    if (this.user.main_role === 'trainer') {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

logOut(){
    if (this.hidden  === true){
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }


deleteToken(){
    this.userService.removeToken();
    this.router.navigateByUrl('');
  }
}
