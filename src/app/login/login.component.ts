import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  apiURL = '';
  name: string;
  password: string;
  token: any;
  loginForm: FormGroup;

  // tslint:disable-next-line:no-inferrable-types
  isLoginError: boolean = false;

  // tslint:disable-next-line:max-line-length
  constructor(private translate: TranslateService, public router: Router, private httpClient: HttpClient, private http: Http, private userService: UserService) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.loginForm = new FormGroup ({'name': new FormControl(),
    'password': new FormControl()});

  }
  ValidateUser(userName: string , password: string) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
     localStorage.setItem('userToken', data.access_token);
     console.log(data.access_token);
     this.router.navigate(['/project-mgmt']);
   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }

  onLoggedin() {
   this.ValidateUser(this.loginForm.value.name, this.loginForm.value.password);
   this.router.navigate(['/project-mgmt']);
}
}
