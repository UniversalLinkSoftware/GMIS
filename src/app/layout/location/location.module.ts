import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LocationRoutingModule, PageHeaderModule,ReactiveFormsModule],
    declarations: [LocationComponent]
})
export class LocationModule {}
