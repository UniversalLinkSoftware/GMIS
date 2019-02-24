import { SocialService } from './social.service';
import { Social } from './social-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DataStorageService } from './data-storage.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {
  page3Form: FormGroup;
  TotalRow: number;
 // socialInfo: Social;
  subscription: Subscription;
   aipf = 0;
   fml = 0;
   mle = 0;
   totpop = 0;
   fag = 0;
   fOs = 0;
   lr = 0;
   lm = 0;
   lf = 0;
   popMin = 0;
   popMout = 0;
   numhh = 0;
   wihh = 0;


  constructor(private socialService: SocialService, private dataStorageService: DataStorageService, private _fb: FormBuilder ) {}
  onSubmit() {
      this.socialService.addSocial(this.page3Form.value);
    }

    onSaveData() {
      this.dataStorageService.storeSocial().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    }
    onFetch() {
      console.log(this.dataStorageService.getSocial());
    }
    onEditData() {
  const socialInfo = this.socialService.getSocialInfo();
  this.page3Form.setValue(socialInfo);

    }
ngOnInit() {
  console.log(this.dataStorageService.getSocial());
  // tslint:disable-next-line:prefer-const

        this.page3Form =
  new FormGroup({
    tableRows: this._fb.array([this.initTableRows()]),
    'numberOfHousehold': new FormControl(this.numhh, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'male': new FormControl(this.mle, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'female': new FormControl(this.fml, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'totalPopulation': new FormControl(this.totpop, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'annualIncomePerFamily': new FormControl(this.aipf, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromAgriculture': new FormControl(this.fag, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromOtherSource': new FormControl(this.fOs, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyRate': new FormControl(this.lr, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyMale': new FormControl(this.lm, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyFemale': new FormControl(this.lf, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'populationMigrationIn': new FormControl(this.popMin, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'populationMigrationOut': new FormControl(this.popMout, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'womenInHousehold': new FormControl(this.wihh, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],

  )
  });


}
initTableRows() {
  return this._fb.group({
    Select: [''],
    Number: [''],
    Percentage: [''],
  });
}

addNewRows() {
  const control = <FormArray>this.page3Form.controls['tableRows'];
  control.push(this.initTableRows());
}

deleteRows(index: number) {
const control = <FormArray>this.page3Form.controls['tableRows'];
if (control != null) {
  this.TotalRow = control.value.length;
}
if (this.TotalRow > 1) {
  control.removeAt(index);
} else {
  alert('One record is mandatory.');
  return false;
}
}
}
