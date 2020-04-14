import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'btd-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class StepperComponent implements OnInit {

  items: MenuItem[];
  activeIndex = 1;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [{
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity: 'info', summary: 'Algo 1', detail: event.item.label});
      }
  },
  {
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({severity: 'info', summary: 'Algo 2', detail: event.item.label});
      }
  },
  {
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({severity: 'info', summary: 'Algo 3', detail: event.item.label});
      }
  },
  {
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({severity: 'info', summary: 'Algo 4', detail: event.item.label});
      }
  },
  {
    command: (event: any) => {
        this.activeIndex = 4;
        this.messageService.add({severity: 'info', summary: 'Algo 5', detail: event.item.label});
      }
  }
];
}
}
