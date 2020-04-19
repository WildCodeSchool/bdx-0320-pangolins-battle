import { Component, OnInit, Input} from '@angular/core';
import { Algo } from 'src/app/classes/algo-list';


@Component({
  selector: 'btd-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  @Input() algoID: Algo;

  constructor() { }

  ngOnInit(): void {
  }
}
