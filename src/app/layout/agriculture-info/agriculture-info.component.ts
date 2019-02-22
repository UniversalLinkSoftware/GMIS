import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ExistingAgriculture } from './agriculture-info.model';

@Component({
  selector: 'app-agriculture-info',
  templateUrl: './agriculture-info.component.html',
  styleUrls: ['./agriculture-info.component.scss']
})
export class AgricultureInfoComponent implements OnInit { 
  page4Form:FormGroup;
  //agricultureInfo: ExistingAgriculture;

  public rows: Array<{
     existingCropName: string,
    existingPlantingDate: string,
     existingPlantingWeek: string,
     existingCropArea: number,
     existingHarvestingDate: string,
     existingHarvestingWeek: string,
     existingAverageCropYield: number,
     existingAvgSeed: number,
     existingAvgDAP: number,
     existingAvgHumanLabour: number,
     existingAvgOrganicManure: number,
     existingAvgPotash: number,
     existingAvgAnimalLabour: number,
     existingAvgUrea: number,
     existingAvgMachineLabour: number,
     }> = [];

     buttonClicked() {
      // tslint:disable-next-line:prefer-const
      let existingCropName = this.page4Form.controls['existingCropName'].value;
      // tslint:disable-next-line:prefer-const
      let existingPlantingDate = this.page4Form.controls['existingPlantingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingPlantingWeek = this.page4Form.controls['existingPlantingWeek'].value;
      // tslint:disable-next-line:prefer-const
      let existingCropArea = this.page4Form.controls['existingCropArea'].value;
      // tslint:disable-next-line:prefer-const
      let existingHarvestingDate = this.page4Form.controls['existingHarvestingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingHarvestingWeek = this.page4Form.controls['existingHarvestingWeek'].value;
      // tslint:disable-next-line:prefer-const
      let existingAverageCropYield = this.page4Form.controls['existingAverageCropYield'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgSeed = this.page4Form.controls['existingAvgSeed'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgDAP = this.page4Form.controls['existingAvgDAP'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgHumanLabour = this.page4Form.controls['existingAvgHumanLabour'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgOrganicManure = this.page4Form.controls['existingPlantingDate'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgPotash = this.page4Form.controls['existingAvgPotash'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgAnimalLabour = this.page4Form.controls['existingAvgAnimalLabour'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgUrea = this.page4Form.controls['existingAvgUrea'].value;
      // tslint:disable-next-line:prefer-const
      let existingAvgMachineLabour = this.page4Form.controls['existingAvgMachineLabour'].value;

      this.rows.push( {
        existingCropName: existingCropName,
        existingPlantingDate: existingPlantingDate,
        existingPlantingWeek: existingPlantingWeek,
        existingCropArea: existingCropArea,
        existingHarvestingDate: existingHarvestingDate,
        existingHarvestingWeek: existingHarvestingWeek,
        existingAverageCropYield: existingAverageCropYield,
        existingAvgSeed: existingAvgSeed,
        existingAvgDAP: existingAvgDAP,
        existingAvgHumanLabour: existingAvgHumanLabour,
        existingAvgOrganicManure: existingAvgOrganicManure,
        existingAvgPotash: existingAvgPotash,
        existingAvgAnimalLabour: existingAvgAnimalLabour,
        existingAvgUrea: existingAvgUrea,
        existingAvgMachineLabour: existingAvgMachineLabour,
         } );
      this.page4Form.reset(); }

  constructor() { }


  ngOnInit() {
    this.page4Form = new FormGroup({
      'existingCropName':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingPlantingDate':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingPlantingWeek':new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingCropArea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingHarvestingDate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingHarvestingWeek': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAverageCropYield': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgSeed': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgDAP': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgHumanLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgOrganicManure': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgPotash': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgAnimalLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgUrea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'existingAvgMachineLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedCropName': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedPlantingDate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedPlantingWeek': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedCropArea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedHarvestingDate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedHarvestingWeek': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAverageCropYield': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgSeed': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgDap': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgHumanLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgOrganicManure': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgPotash': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgAnimalLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgUrea': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proposedAvgMachineLabour': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'NeareastAgricultureExtensionOffice': new FormControl(null, [Validators.required]),
      'extensionOfficeDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'neareastAgrovetOffice': new FormControl(null, [Validators.required]),
      'agrovetOfficeDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }
  }
