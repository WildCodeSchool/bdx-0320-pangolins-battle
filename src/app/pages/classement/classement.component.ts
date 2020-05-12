import { Component, OnInit } from '@angular/core';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';

@Component({
  selector: 'btd-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  battleId: number;
  algosFromBattleCompleted: any;
  user: User;
  solution: any;
  points: number;

  constructor(private solutionService: SolutionService, private userService: UserService, private BattleListService: BattlesListService) {}

  ngOnInit(): void {
   this.solutionService.getSolutions(524).subscribe(data => console.log(data));
   this.solutionService.getSolutions(524).subscribe(data => {
     this.solution = data
     let points = 0
     if (this.solution.code != '') {
       points += 100;
       this.points = points;
     }});


    this.algosFromBattleCompleted = this.solutionService.areAlgosFromBattleCompleted
    this.user = this.userService.user;
    console.log(this.user)

  }

}
