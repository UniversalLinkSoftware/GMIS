import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-groundwater-info',
  templateUrl: './groundwater-info.component.html',
  styleUrls: ['./groundwater-info.component.scss']
})
export class GroundwaterInfoComponent implements OnInit {

  page6Form:FormGroup;

  constructor() { }

  ngOnInit() {
    this.page6Form=new FormGroup({
      'NW':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'WD':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'WS':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ST':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'HD':new FormControl(null, [Validators.required,]),
      'AT':new FormControl(null,[Validators.required,]),
      'AM':new FormControl(null,[Validators.required,]),
      'BC':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'MCL':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'O':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }
  }

