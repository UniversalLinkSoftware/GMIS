import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplementationInfoComponent } from './implementation-info.component';

const routes: Routes = [
    {
        path: '', component: ImplementationInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImplementationRoutingModule {
}
