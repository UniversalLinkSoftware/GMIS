import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {
  page3Form: FormGroup;


ngOnInit(){
  this.page3Form= 
  new FormGroup({
    'NOH':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'M':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'F':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'TP':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'AIPF':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'FA':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'FOS':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'LR':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'APMIn':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'APMOut':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'WIH':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)],
    
  )
  })
    
}
}