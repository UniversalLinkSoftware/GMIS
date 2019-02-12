import { RiverHydology } from './engineering-info.model';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
export class EngineeringService implements OnInit {

  // tslint:disable-next-line:member-ordering
  private engineeringInfo: RiverHydology;
  engineeringChanged = new Subject<RiverHydology>();
  ngOnInit() {}

  addEngineering(rHydrology: RiverHydology) {
    console.log(rHydrology);
    this.engineeringInfo = rHydrology;
  }

  getEngineeringInfo() {
    return this.engineeringInfo;
  }
  setEngineering(rHydrology: RiverHydology) {
    this.engineeringInfo = rHydrology;
    console.log(this.engineeringInfo);
    this.engineeringChanged.next( this.engineeringInfo);
  }

}


