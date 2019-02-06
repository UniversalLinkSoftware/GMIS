import { Social } from './social-info.model';
import { OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class SocialService implements OnInit {


    // tslint:disable-next-line:member-ordering
    private socialInfo: Social;

    socialChanged = new Subject<Social>();
    ngOnInit() {}
    addSocial(social: Social) {
        console.log(social);
        this.socialInfo = social;

      }

      getSocialInfo() {
        console.log(this.socialInfo);
          return this.socialInfo;
      }


      setSocial(social: Social) {
            this.socialInfo = social;
            console.log(this.socialInfo);
            this.socialChanged.next( this.socialInfo);
      }
}


