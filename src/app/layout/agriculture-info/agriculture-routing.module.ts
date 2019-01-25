import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgricultureInfoComponent } from './agriculture-info.component';

const routes: Routes = [
    {
        path: '', component: AgricultureInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgricultureRoutingModule {
}
