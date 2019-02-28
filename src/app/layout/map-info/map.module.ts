import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapInfoComponent } from './map-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MapRoutingModule, PageHeaderModule, ReactiveFormsModule , FormsModule],
    declarations: [MapInfoComponent]
})
export class MapModule {}
