import { Component } from '@angular/core';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'home-view',
  templateUrl: './homeView.component.html',
})

export class HomeViewComponent {
    constructor(private _commonService: CommonDataService) {
    }
}