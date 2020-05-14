import { Component, OnInit } from '@angular/core';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'btd-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  battleId: number;
  solution: any;
  battle;
  scores: any = [];

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService,
    private userService: UserService,
    private battleListService: BattlesListService) {}

  ngOnInit(): void {
    this.battleId = +this.route.snapshot.paramMap.get('BattleId');
    this.battleListService.getAllBattles().subscribe(data => {
      this.battle = data.filter(battle => battle.id === this.battleId);
    });
    this.solutionService.getSolutions(this.battleId).subscribe(data => console.log(data));
    this.solutionService.getSolutions(this.battleId).subscribe(data => {
      this.solution = data;
      this.rankWilders();
    });
  }
    rankWilders(){
    const userId = [];
    const count = [];
    const userFullName = [];
    const userGitPicture = [];
    let points = [];
    let prev;
    this.solution.sort();

    for ( let i = 0; i < this.solution.length; i++ ) {
       if ( this.solution[i].creator.id !== prev ) {
           userId.push(this.solution[i].creator.id);
           count.push(1);
           userFullName.push(this.solution[i].creator.fullname);
           userGitPicture.push(this.solution[i].creator.github);
       } else {
           count[count.length - 1]++;
       }
       prev = this.solution[i].creator.id;
    }
    points = count.map(value => value * 50);
    return this.scores = [userId, points, userFullName, userGitPicture];
    }
  }
