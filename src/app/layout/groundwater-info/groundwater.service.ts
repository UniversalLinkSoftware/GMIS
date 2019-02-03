import { OnInit } from '@angular/core';
import { Groundwater } from './groundwater-info.model';
export class GroundwaterService implements OnInit {
    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private groundwaterInfo: Groundwater;

    addGroundwater(groundwater: Groundwater) {
        console.log(groundwater);
        this.groundwaterInfo = groundwater;
      }

      getGroundwaterInfo() {
          return this.groundwaterInfo;
      }


}