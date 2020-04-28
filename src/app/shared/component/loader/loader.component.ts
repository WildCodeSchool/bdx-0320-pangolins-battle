import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'btd-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService){}

  ngOnInit(): void {
  }

}
