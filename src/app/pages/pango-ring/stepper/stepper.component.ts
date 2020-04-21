import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'btd-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {
    @Input() activeIndex = 1;

    steps: MenuItem[];
    constructor() { }

    ngOnInit() {

        this.steps = [
            {label: 'Algo 1'},
            {label: 'Algo 2'},
            {label: 'Algo 3'},
            {label: 'Algo 4'},
            {label: 'Algo 5'},
        ];
    }
}
