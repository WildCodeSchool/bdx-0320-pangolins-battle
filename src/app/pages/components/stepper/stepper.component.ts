import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'btd-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

    ngOnInit() {
        this.items = [
            {label: 'Algo 1'},
            {label: 'Algo 2'},
            {label: 'Algo 3'},
            {label: 'Algo 4'},
            {label: 'Algo 5'}
        ];
    }
}
