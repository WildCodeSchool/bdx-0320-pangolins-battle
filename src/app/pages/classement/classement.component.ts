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

  user: User;
  solution: any;
  usersIdCollection: number[] = [];
  userId: number[] = [];
  userCounter:any = {};
  userCounterArray: any[] = [];
  userCounterValues: number[] = [];
  scores: any = [];

  constructor(private route: ActivatedRoute,private solutionService: SolutionService, private userService: UserService, private BattleListService: BattlesListService) {}

  ngOnInit(): void {
  this.battleId = +this.route.snapshot.paramMap.get('BattleId');
   this.solutionService.getSolutions(this.battleId).subscribe(data => console.log(data));
   this.solutionService.getSolutions(this.battleId).subscribe(data => {
     this.solution = data
    // On itère sur le tableau de solution afin d'y récupérer les ID de chaque participants de chaque Algo. Si un participant a fait 5 algos,
    // On aura 5x son ID. On les insère dans un tableau.
    this.solution.forEach(element => {
      this.usersIdCollection.push(element = element.creator.id)
      console.log(this.usersIdCollection);

      this.userCounter = this.usersIdCollection.reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) +1;
        return prev;
      }, {});
      console.log(this.userCounter)

      this.userCounterArray = Object.keys(this.userCounter).map((key) => {
        return [Number(key), this.userCounter[key]];
      });
      console.log(this.userCounterArray);

      for (const id of this.solution) {
        
      }



      /* this.userCounterValues = Object.values(this.userCounter)
      console.log(this.userCounterValues); */



    });
  });

    this.user = this.userService.user;
    console.log(this.user)
  }
}
