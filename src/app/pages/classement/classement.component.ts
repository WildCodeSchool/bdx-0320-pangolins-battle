import { Component, OnInit } from '@angular/core';
import { SolutionService } from 'src/app/shared/services/solution/solution.service';
import { BattlesListService } from 'src/app/shared/services/battles-list/battles-list.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

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
  points = 100;

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService,
    private battleListService: BattlesListService) { }

  ngOnInit(): void {
    this.battleId = +this.route.snapshot.paramMap.get('BattleId');

    const combinedObs$ = forkJoin(
      [this.battleListService.getBattleById(this.battleId),
      this.solutionService.getSolutions(this.battleId)]
    );

    combinedObs$.subscribe((results: any[]) => {
      this.battle = results[0];
      const solution = results[1];
      this.rankWilders(solution, this.battle);
    });
  }

  rankWilders(solution, battle) {
    let count = 0;
    let prev = 0;
    solution = solution.sort((a, b) => {
      return a.creator.id - b.creator.id;
    });

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < solution.length; i++) {
      if (solution[i].creator.id !== prev && prev !== 0) {
        const duration = (+new Date(solution[i - 1].postedAt) - +new Date(battle.launchDate))
          / +new Date(battle.launchDate) * 10000;
        const score = count - duration;
        const newWilder = {
          id: solution[i - 1].creator.id,
          fullname: solution[i - 1].creator.fullname,
          githubPict: solution[i - 1].creator.github,
          score: count - duration,
          score2: count,
          finalScore: Math.floor(score),
          lastCommit: new Date(solution[i - 1].postedAt),
        };
        this.scores.push(newWilder);
        count = this.points;
      } else {
        count += this.points;
      }
      prev = solution[i].creator.id;
      const j = solution.length;
      if (j - 1 === i) {
        const duration = (+new Date(solution[i - 1].postedAt) - +new Date(battle.launchDate))
          / +new Date(battle.launchDate) * 10000;
        const score = count - duration;
        const newWilder = {
          id: solution[i].creator.id,
          fullname: solution[i].creator.fullname,
          githubPict: solution[i].creator.github,
          score: count - duration,
          score2: count,
          finalScore: Math.floor(score),
          lastCommit: new Date(solution[i].postedAt),
        };
        this.scores.push(newWilder);
      }
    }
    this.scores = this.scores.sort((a, b) => {
      return b.score - a.score;
    });
    return this.scores;
  }
}

