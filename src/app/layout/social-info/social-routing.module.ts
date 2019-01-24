import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialInfoComponent } from './social-info.component';

const routes: Routes = [
    {
        path: '', component: SocialInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule {
}
