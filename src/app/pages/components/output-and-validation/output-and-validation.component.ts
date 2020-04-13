import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'btd-output-and-validation',
  templateUrl: './output-and-validation.component.html',
  styleUrls: ['./output-and-validation.component.scss']
})
export class OutputAndValidationComponent implements OnInit {

  constructor() { }

  @Input() myID: any;

  ngOnInit(): void {
  }

}
