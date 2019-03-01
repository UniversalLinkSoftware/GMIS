// import { DataStorageService } from '../social-info/data-storage.service';
import { ProjectService } from './project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Project } from './project-info.model';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  project: FormGroup;
  projectInfo: Project;
  other = false;
  subscription: Subscription;
  spn = 0;
  cagca = 0;
  canca = 0;
  pb = 0;
  rb = 0;
  aby = 0;
  adate = 0;
  apdate = 0;
  edate = 0;

  constructor(private projectService: ProjectService, ) { }
  onSubmit() {
    this.projectService.addProject(this.project.value);
  }

  // onSaveData() {
  //   this.dataStorageService.storeProject().subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   );
  // }

  // onFetch() {
  //   console.log(this.dataStorageService.getProject());
  // }
  onEditData() {
    const projectInfo = this.projectService.getProjectInfo();
    this.project.setValue(projectInfo);
  }

  ngOnInit() {
    this.project = new FormGroup({
      'subProjectName': new FormControl(this.spn, [Validators.required]),
      'commandAreagca': new FormControl(this.cagca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'commandAreanca': new FormControl(this.canca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'preparedBy': new FormControl(this.pb, [Validators.required]),
      'recomendedBy': new FormControl(this.rb, [Validators.required]),
      'approvedBy': new FormControl(this.aby, [Validators.required]),
      'approvedDate': new FormControl(this.adate, [Validators.required]),
      'approvedDate1': new FormControl(this.apdate, [Validators.required]),
      'endDate': new FormControl(this.edate, [Validators.required]),
  });
  }
}
