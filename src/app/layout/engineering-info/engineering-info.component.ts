import { EngineeringService } from './engineering.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RiverHydology } from './engineering-info.model';
import { Response } from '@angular/http';
import { DataStorageService } from '../social-info/data-storage.service';

@Component({
  selector: 'app-engineering-info',
  templateUrl: './engineering-info.component.html',
  styleUrls: ['./engineering-info.component.scss']
})

export class EngineeringInfoComponent implements OnInit {
  myGroup: FormGroup;
  engineeringInfo: RiverHydology;
  public rows: Array<{bNameOfBranchCanal: string, bgca: number, bcca: number
      bTotallength: number,
      bLinedTypeCanalLength: number,
      bUnlinedTypeCanalLength: number,
      bDesignDischarge: number,
      btertiary: string,
      bSubBranchLength: string,
      bCanalStructure: string, }> = [];
 
  
  
  // fieldArray: Array<any> = [];
  // newAttribute: any = {};


  // addFieldValue() {
  //     this.fieldArray.push(this.newAttribute);
  //     this.newAttribute = {};
  // }

  // deleteFieldValue(index) {
  //     this.fieldArray.splice(index, 1);
  // }
  buttonClicked() {
    let bNameOfBranchCanal= this.myGroup.controls['bNameOfBranchCanal'].value;
    let bgca = this.myGroup.controls['bgca'].value;
    let bcca=this.myGroup.controls['bcca'].value;
    let bTotallength=this.myGroup.controls['bTotallength'].value;
    let bLinedTypeCanalLength=this.myGroup.controls['bLinedTypeCanalLength'].value;
    let bUnlinedTypeCanalLength=this.myGroup.controls['bUnlinedTypeCanalLength'].value;
    let bDesignDischarge=this.myGroup.controls['bDesignDischarge'].value;
    let btertiary=this.myGroup.controls['btertiary'].value;
    let bSubBranchLength=this.myGroup.controls['bSubBranchLength'].value;
    let bCanalStructure=this.myGroup.controls['bCanalStructure'].value;
    
   this.rows.push( {bNameOfBranchCanal: bNameOfBranchCanal, bgca:bgca, bcca: bcca,bTotallength: bTotallength,
    bLinedTypeCanalLength: bLinedTypeCanalLength,
    bUnlinedTypeCanalLength: bUnlinedTypeCanalLength,
    bDesignDischarge: bDesignDischarge,
    btertiary: btertiary,
    bSubBranchLength: bSubBranchLength,
    bCanalStructure: bCanalStructure, } );
  this.myGroup.reset();}
    
  constructor(private engineeringService: EngineeringService, private dataStorageService: DataStorageService ) {}
  onSubmit() {
      this.engineeringService.addEngineering(this.myGroup.value);
    }
      onSaveData() {
        this.dataStorageService.storeEngineering().subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
      }
      
  ngOnInit() {

    this.myGroup = new FormGroup({
      // firstName: new FormControl(),
      'catchmentArea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/ )]),
      'lngSlopeOfRiverAtHeadworksSite': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge25': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge50': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'floodDischarge100': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'methodOfFloodCalculation': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nameOfRiverSource': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'riverWidthAtHeadworksSite': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'averageAnnualRiverfall': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'hydrologicalRegion': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'riverBasin': new FormControl(null, [Validators.required]),

      'mCanalDirection': new FormControl(null, [Validators.required]),
      'mTotalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mLinedTypeCanalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mDesignDischarge': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mTopWidth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mSlideSlope': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mNumberOfBranchCanal': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mBottomWidth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mLongitudinalSlope': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mBranchCanalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mUnlinedTypeCanalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mTotalDepth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),

      'bNameOfBranchCanal': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bgca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bcca': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bTotallength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bLinedTypeCanalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bUnlinedTypeCanalLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bDesignDischarge': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'btertiary': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bSubBranchLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bCanalStructure': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
   });
  }

}
