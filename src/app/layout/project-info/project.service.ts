import { Project } from './project-info.model';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class ProjectService implements OnInit {

  private projectInfo: Project;
  projectChanged = new Subject<Project>();
  ngOnInit() {}

  addProject(rproject: Project) {
    console.log(rproject);
    this.projectInfo = rproject;
  }

  getProjectInfo() {
    return this.projectInfo;
  }

  setProject(rproject: Project) {
    this.projectInfo = rproject;
    console.log(this.projectInfo);
    this.projectChanged.next( this.projectInfo);
  }

}
