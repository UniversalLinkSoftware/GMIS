import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImplementationRoutingModule } from './implementation-routing.module';
import { ImplementationInfoComponent } from './implementation-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,FormsModule ,ImplementationRoutingModule, PageHeaderModule],
    declarations: [ImplementationInfoComponent]
})
export class ImplementationModule {}
