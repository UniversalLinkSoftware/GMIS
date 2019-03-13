import { Component, OnInit } from '@angular/core';
import { Economic } from '../economic-info.model';
import { EconomicService } from '../economic.service';

@Component({
  selector: 'app-economic-view',
  templateUrl: './economic-view.component.html',
  styleUrls: ['./economic-view.component.scss']
})
export class EconomicViewComponent implements OnInit {

  constructor(private economicService: EconomicService) {

  }
   economic: Array<Economic>;
   ngOnInit() {
   this.economicService.getAll().subscribe(data => {
     this.economic = data;
   });
 }

}
