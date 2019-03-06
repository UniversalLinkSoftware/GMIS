import { OnInit } from '@angular/core';
import { Groundwater } from './groundwater-info.model';
import { Subject } from 'rxjs';
export class GroundwaterService implements OnInit {


    // tslint:disable-next-line:member-ordering
    private groundwaterInfo: Groundwater;
    groundwaterChanged = new Subject<Groundwater>();
    ngOnInit() {}


    addGroundwater(groundwater: Groundwater) {
        console.log(groundwater);
        this.groundwaterInfo = groundwater;
      }

      getGroundwaterInfo() {
          return this.groundwaterInfo;
      }
     



}