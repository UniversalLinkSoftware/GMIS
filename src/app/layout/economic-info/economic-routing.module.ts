import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomicInfoComponent } from './economic-info.component';

const routes: Routes = [
    {
        path: '', component: EconomicInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EconomicRoutingModule {
}
