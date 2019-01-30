import { SocialService } from './social.service';
import { Social } from './social-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from './data-storage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {
  page3Form: FormGroup;
  socialInfo: Social;
  constructor(private socialService: SocialService, private dataStorageService: DataStorageService ) {}
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
ngOnInit() {
   this.page3Form =
  new FormGroup({
    'numberOfHousehold': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'male': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'female': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'totalPopulation': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'annualIncomePerFamily': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromAgriculture': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'fromOtherSource': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'literacyRate': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'populationMigrationIn': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'populationMigrationOut': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'womenInHousehold': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],

  )
  });






}

}
