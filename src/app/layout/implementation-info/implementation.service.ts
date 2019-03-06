import { Implementation } from './implementation-info.model';
import { Subject } from 'rxjs';

import { OnInit } from '@angular/core';
export class ImplementationService implements OnInit {
    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private implementationInfo: Implementation;
    implementationChanged = new Subject<Implementation>();

    addImplementation(implementation: Implementation) {
        console.log(implementation);
        this.implementationInfo = implementation;
      }

      getImplementationInfo() {
          return this.implementationInfo;
      }

      setImplementation(implementation: Implementation) {
        this.implementationInfo = implementation;
        console.log(this.implementationInfo);
        this.implementationChanged.next( this.implementationInfo);
  }

}


