import { Implementation } from './implementation-info.model';

import { OnInit } from '@angular/core';
export class ImplementationService implements OnInit {
    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private implementationInfo: Implementation;

    addImplementation(implementation: Implementation) {
        console.log(implementation);
        this.implementationInfo = implementation;
      }

      getImplementationInfo() {
          return this.implementationInfo;
      }


}


