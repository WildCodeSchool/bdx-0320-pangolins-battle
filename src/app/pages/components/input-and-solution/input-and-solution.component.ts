import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btd-input-and-solution',
  templateUrl: './input-and-solution.component.html',
  styleUrls: ['./input-and-solution.component.scss']
})
export class InputAndSolutionComponent implements OnInit {

  constructor() { }

  @Input() myID: any;

  ngOnInit(): void {
  }

}
