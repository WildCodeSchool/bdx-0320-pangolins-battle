import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'btd-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  @Input() algoID: any;

  constructor() { }

  ngOnInit(): void {
  }
}
