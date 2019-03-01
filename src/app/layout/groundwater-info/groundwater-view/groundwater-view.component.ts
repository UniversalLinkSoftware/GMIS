import { Component, OnInit } from '@angular/core';
import { Groundwater } from '../groundwater-info.model';
import { GroundwaterService } from '../groundwater.service';

@Component({
  selector: 'app-groundwater-view',
  templateUrl: './groundwater-view.component.html',
  styleUrls: ['./groundwater-view.component.scss']
})
export class GroundwaterViewComponent implements OnInit {

  constructor(private groundwaterService: GroundwaterService) {

   }
   groundwater: Array<Groundwater>;
    ngOnInit() {
    this.groundwaterService.getAll().subscribe(data => {
      this.groundwater = data;
      console.log(data);
    });
  }

}
