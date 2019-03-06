import { LandTenure } from './../landtenure.model';
import { SocialService } from '../social.service';

import { Component, OnInit } from '@angular/core';
import { Social } from '../social-info.model';
import { Farmsize } from '../farmsize.model';
import { EthnicGroups } from '../ethnicgroups.model';



@Component({
  selector: 'app-social-view',
  templateUrl: './social-view.component.html',
  styleUrls: ['./social-view.component.scss']
})
export class SocialViewComponent implements OnInit {

  constructor(private socialService: SocialService) {

   }
   social: Array<Social>;
   farm: Array<Farmsize>;
   land: Array<LandTenure>;
   ethnic: Array<EthnicGroups>;
    ngOnInit() {
    this.socialService.getAll().subscribe(data => {
      this.social = data;
      console.log(data);
    });
    this.socialService.getAllFarm().subscribe(data => {
      this.farm = data;
      console.log(data);

    });
    this.socialService.getAllLand().subscribe(data => {
      this.land = data;
      console.log(data);

    });
    this.socialService.getAllEthnic().subscribe(data => {
      this.ethnic = data;
      console.log(data);

    });

}
}
