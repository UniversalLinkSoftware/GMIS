import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-implementation-info',
  templateUrl: './implementation-info.component.html',
  styleUrls: ['./implementation-info.component.scss']
})
export class ImplementationInfoComponent implements OnInit {

  constructor() { }
  page8Form: FormGroup;

  ngOnInit(){
    this.page8Form= 
    new FormGroup({
      'GON':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'WUA':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    
    }
    )
  }
}