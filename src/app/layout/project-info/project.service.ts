import { Project } from './project-info.model';
import { OnInit } from '@angular/core';

export class ProjectService implements OnInit {

  private projectInfo: Project;
  ngOnInit() {}

  addProject(rproject: Project) {
    console.log(rproject);
    this.projectInfo = rproject;
  }

  getProjectInfo() {
    return this.projectInfo;
  }
}
