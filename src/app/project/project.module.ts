import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [ProjectCreateComponent, ProjectComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
