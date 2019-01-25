import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroundwaterInfoComponent } from './groundwater-info.component';


const routes: Routes = [
    {
        path: '', component: GroundwaterInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroundwaterRoutingModule {
}
