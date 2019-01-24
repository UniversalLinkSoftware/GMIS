import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ProjectInfoComponent } from './layout/project-info/project-info.component';
import { LocationComponent } from './layout/location/location.component';
import { SocialInfoComponent } from './layout/social-info/social-info.component';
import { AgricultureInfoComponent } from './layout/agriculture-info/agriculture-info.component';
import { EngineeringInfoComponent } from './layout/engineering-info/engineering-info.component';
import { GroundwaterInfoComponent } from './layout/groundwater-info/groundwater-info.component';
import { EconomicInfoComponent } from './layout/economic-info/economic-info.component';
import { ImplementationInfoComponent } from './layout/implementation-info/implementation-info.component';
import { MapInfoComponent } from './layout/map-info/map-info.component';

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
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
