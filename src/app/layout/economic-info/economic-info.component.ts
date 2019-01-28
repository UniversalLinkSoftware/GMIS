import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-economic-info',
  templateUrl: './economic-info.component.html',
  styleUrls: ['./economic-info.component.scss']
})
export class EconomicInfoComponent implements OnInit {
  page7Form:FormGroup;

  constructor() { }

  ngOnInit() {
    this.page7Form=new FormGroup({
      'TPC':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'BC':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'CY':new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'DR': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ER': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'BC1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'DR1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    });
  }
  }
