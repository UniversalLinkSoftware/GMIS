import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialInfoComponent } from './social-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule, SocialRoutingModule, PageHeaderModule],
    declarations: [SocialInfoComponent]
})
export class SocialModule {}
