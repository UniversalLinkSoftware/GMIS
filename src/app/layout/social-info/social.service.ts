import { Social } from './social-info.model';
import { OnInit } from '@angular/core';
export class SocialService implements OnInit {
    ngOnInit() {}


    // tslint:disable-next-line:member-ordering
    private socialInfo: Social;

    addSocial(social: Social) {
        console.log(social);
        this.socialInfo = social;
      }

      getSocialInfo() {
          return this.socialInfo;
      }


}


