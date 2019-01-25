import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { locationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, locationRoutingModule, PageHeaderModule],
    declarations: [LocationComponent]
})
export class locationModule {}
