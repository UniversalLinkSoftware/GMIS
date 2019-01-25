import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { EngineeringInfoComponent } from './engineering-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EngineeringRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [EngineeringInfoComponent]
})
export class EngineeringModule {}
