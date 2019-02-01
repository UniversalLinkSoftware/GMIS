import { RiverHydology } from './engineering-info.model';
import { OnInit } from '@angular/core';
export class EngineeringService implements OnInit {
    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private engineeringInfo: RiverHydology;

    addEngineering(rHydrology: RiverHydology) {
        console.log(rHydrology);
        this.engineeringInfo = rHydrology;
      }

      getEngineeringInfo() {
          return this.engineeringInfo;
      }


}


