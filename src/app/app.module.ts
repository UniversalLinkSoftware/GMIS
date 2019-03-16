
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialService } from './layout/social-info/social.service';
// import { DataStorageService } from './layout/social-info/data-storage.service';
import { HttpModule } from '@angular/http';
import { Implementation } from './layout/implementation-info/implementation-info.model';
import { ImplementationService } from './layout/implementation-info/implementation.service';
import { EngineeringService } from './layout/engineering-info/engineering.service';
import { ProjectService } from './layout/project-info/project.service';
import { GroundwaterService } from './layout/groundwater-info/groundwater.service';
import { EconomicService } from './layout/economic-info/economic.service';
import { DoiService } from './shared/api/doi.service';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import {AuthInterceptor } from './shared/guard/auth.interceptor';





// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    // tslint:disable-next-line:max-line-length
    declarations: [AppComponent ],
    // tslint:disable-next-line:max-line-length
    providers: [AuthGuard, SocialService, ImplementationService, EngineeringService, ProjectService, GroundwaterService, EconomicService, DoiService, UserService, {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true
      }],
    bootstrap: [AppComponent]
})
export class AppModule {}
