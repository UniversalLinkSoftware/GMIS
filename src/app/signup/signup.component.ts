import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  signupForm: FormGroup;
    constructor(private translate: TranslateService, private userService: UserService, private toastr: ToastrService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
         this.signupForm = new FormGroup ({
        'UserName': new FormControl(),
        'Password': new FormControl(),
        'Email': new FormControl(),
        'FirstName': new FormControl(),
        'LastName': new FormControl()
      });
    }
  OnSubmit() {
        console.log('test');
        this.userService.registerUser( this.signupForm.value)
          .subscribe((data: any) => {
            console.log(data);
            if (data.succeeded === true) {
              this.signupForm.reset();
              this.toastr.success('User registration successful');
            }  else { this.toastr.error(data.errors[0]); }
          });
      }
}
