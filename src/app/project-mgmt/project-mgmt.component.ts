import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-mgmt',
  templateUrl: './project-mgmt.component.html',
  styleUrls: ['./project-mgmt.component.scss']
})
export class ProjectMgmtComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;

  constructor() { }
  createProject() {
    this.isCollapsed1 = !this.isCollapsed1;
    this.isCollapsed2 = true;
  }
  openProject() {
    this.isCollapsed2 = !this.isCollapsed2;
    this.isCollapsed1 = true;
  }


  ngOnInit() {
  }

}
