import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMgmtRoutingModule } from './project-mgmt-routing.module';
import { ProjectMgmtComponent } from './project-mgmt.component';
import { HeaderComponent } from '../layout/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    ProjectMgmtRoutingModule
  ],
  declarations: [ProjectMgmtComponent]
})
export class ProjectMgmtModule { }
