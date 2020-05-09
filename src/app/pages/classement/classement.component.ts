import { Component, OnInit } from '@angular/core';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'btd-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  algosFromBattleCompleted: any;
  user: User;
  constructor(private solutionService: SolutionService, private userService: UserService) { }


  ngOnInit(): void {
    this.algosFromBattleCompleted = this.solutionService.areAlgosFromBattleCompleted
    this.user = this.userService.user;
    console.log(this.user)
    this.PointsAccount();
  }
  PointsAccount() {
    this.solutionService.areAlgosFromBattleCompleted.forEach(algo => {
      let points = 0;
      console.log(points)
      if (algo.status === 'oui') {
        points += 100;
        console.log(points)
      } return points
    });
  }
}
