import { DataStorageService } from '../social-info/data-storage.service';
import { ProjectService } from './project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Project } from './project-info.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  project: FormGroup;
  projectInfo: Project;
  constructor(private projectService: ProjectService, private dataStorageService: DataStorageService ) { }
  onSubmit() {
    this.projectService.addProject(this.project.value);
  }

  onSaveData() {
    this.dataStorageService.storeProject().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  ngOnInit() {
    this.project = new FormGroup({
      'subProjectName': new FormControl(null, [Validators.required]),
      'commandAreagca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'commandAreanca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'preparedBy': new FormControl(null, [Validators.required]),
      'recomendedBy': new FormControl(null, [Validators.required]),
      'approvedBy': new FormControl(null, [Validators.required]),
      'approvedDate': new FormControl(null, [Validators.required]),
      'approvedDate1': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
  });
  }
}
