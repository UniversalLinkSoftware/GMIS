import { OnInit, Injectable } from '@angular/core';
import { Economic } from './economic-info.model';
import { Subject } from 'rxjs';
@Injectable()
export class EconomicService implements OnInit {


    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private economicInfo: Economic;

    addEconomic(economic: Economic) {
        console.log(economic);
        this.economicInfo = economic;
      }

      geteconomicInfo() {
          return this.economicInfo;
      }
    }
