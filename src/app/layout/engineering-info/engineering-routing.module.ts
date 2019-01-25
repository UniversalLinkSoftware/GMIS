import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringInfoComponent } from './engineering-info.component';

const routes: Routes = [
    {
        path: '', component: EngineeringInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineeringRoutingModule {
}
