import { EconomicService } from './../economic-info/economic.service';
import { ImplementationService } from './../implementation-info/implementation.service';
import { Social } from './social-info.model';
import {SocialInfoComponent} from './social-info.component';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';
import 'rxjs';
import { SocialService } from './social.service';
import { EngineeringService } from '../engineering-info/engineering.service';
import { ProjectService } from '../project-info/project.service';
import { GroundwaterService } from '../groundwater-info/groundwater.service';





 @Injectable()
export class DataStorageService {
  constructor(private http: Http, private socialService: SocialService, private implementationService: ImplementationService,
    // tslint:disable-next-line:max-line-length
    private engineeringService: EngineeringService, private projectService: ProjectService, private groundwaterService: GroundwaterService, private economicService: EconomicService) {}

  storeSocial() {
       return this.http.put('https://shopping-ang7.firebaseio.com/social.json', this.socialService.getSocialInfo());
  }
  storeEngineering() {
    return this.http.put('https://server1-345f5.firebaseio.com//engineering.json', this.engineeringService.getEngineeringInfo());
  }
  storeProject() {
    return this.http.put('https://server1-345f5.firebaseio.com//project.json', this.projectService.getProjectInfo());
  }
  storeImplementation() {
    return this.http.put('https://shopping-b94a8.firebaseio.com/implementation.json', this.implementationService.getImplementationInfo());
  }
  storeGroundwater() {
        return this.http.put('https://serverproject-aef56.firebaseio.com/groundwater.json', this.groundwaterService.getGroundwaterInfo());
  }
  storeEconomic() {
    return this.http.put('https://server-test-50da6.firebaseio.com/economic.json', this.economicService.geteconomicInfo());
}

  getSocial() {
    this.http.get('https://shopping-ang7.firebaseio.com/social.json').pipe(
      map(
        (response: Response) => {
          const social: Social = response.json();
          // tslint:disable-next-line:prefer-const
           return social;
        }
      ))
      .subscribe(
        (social: Social) => {
          this.socialService.setSocial(social);
        }
      );
  }
}
