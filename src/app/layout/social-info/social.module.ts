import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialInfoComponent } from './social-info.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SocialRoutingModule, PageHeaderModule],
    declarations: [SocialInfoComponent]
})
export class FormModule {}
