import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }
  project: FormGroup;
  ngOnInit() {
    this.project = new FormGroup({
      'spn': new FormControl(null, [Validators.required]),
      'gca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pb': new FormControl(null, [Validators.required]),
      'rb': new FormControl(null, [Validators.required]),
      'ab': new FormControl(null, [Validators.required]),
      'ad': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ad1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ed': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  });
  }
}
