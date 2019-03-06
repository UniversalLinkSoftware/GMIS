import { Economic } from './economic-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EconomicService } from './economic.service';
// import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-economic-info',
  templateUrl: './economic-info.component.html',
  styleUrls: ['./economic-info.component.scss']
})
export class EconomicInfoComponent implements OnInit {
  page7Form: FormGroup;
 economicInfo: Economic;

 public rows: Array<{
  totalProjectCost: number,
  bcRatio1: number,
  costingYear: Date,
   discountRate1: number,
   eirr: number,
   bcRatio2: number,
   discountRatio2: number,
   }> = [];

   buttonClicked() {
    // tslint:disable-next-line:prefer-const
    let totalProjectCost = this.page7Form.controls['totalProjectCost'].value;
    // tslint:disable-next-line:prefer-const
    let bcRatio1 = this.page7Form.controls['bcRatio1'].value;
    // tslint:disable-next-line:prefer-const
    let costingYear = this.page7Form.controls['costingYear'].value;
    // tslint:disable-next-line:prefer-const
    let discountRate1 = this.page7Form.controls['discountRate1'].value;
    // tslint:disable-next-line:prefer-const
    let eirr = this.page7Form.controls['eirr'].value;
    // tslint:disable-next-line:prefer-const
    let bcRatio2 = this.page7Form.controls['bcRatio2'].value;
    // tslint:disable-next-line:prefer-const
    let discountRatio2 = this.page7Form.controls['discountRatio2'].value;


   this.rows.push( {
     totalProjectCost: totalProjectCost,
    bcRatio1: bcRatio1,
    costingYear: costingYear,
    discountRate1: discountRate1,
    eirr: eirr,
    bcRatio2: bcRatio2,
    discountRatio2: discountRatio2,
     } );
  this.page7Form.reset(); }


  constructor(private economicService: EconomicService, ) { }

  onSubmit() {
    this.economicService.addEconomic(this.page7Form.value);
  }

  // onAddInfo() {
  //   (<FormArray > this.page7Form.get('info')).push(
  //     new FormGroup({
  //       'name' : new FormControl()
  //     })
  //   );
  // }

  // onSaveData() {
  //   this.dataStorageService.storeEconomic().subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   );
  // }
  ngOnInit() {
    this.page7Form = new FormGroup({
      'totalProjectCost': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bcRatio1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'costingYear': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'discountRate1': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'eirr': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bcRatio2': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'discountRatio2': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    });
  }
  }
