import { Component, OnInit, Input} from '@angular/core';
import { Algo } from 'src/app/classes/algo-list';
import { CurrentAlgoIndex } from 'src/app/classes/currentAlgoIndex';


@Component({
  selector: 'btd-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {


  @Input() algorithm: Algo;


  constructor() { }

  ngOnInit(): void {
  }
}

