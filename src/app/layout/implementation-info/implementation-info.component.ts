import { Implementation } from './implementation-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImplementationService } from './implementation.service';
// import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-implementation-info',
  templateUrl: './implementation-info.component.html',
  styleUrls: ['./implementation-info.component.scss']
})
export class ImplementationInfoComponent implements OnInit {

  
  page8Form: FormGroup;
  // implementationInfo:Implementation;
  subscription: Subscription;
  gshare=0;
  wsahre=0;
  phyp= 0;
  phypdate=0;
  finp=0;
  finpdate=0;
  wuado=0;
  wuard=0;
  tn=0;
  td=0;
  tp=0;
  nop=0;
  public rows: Array<{trainingName: string, trainingDate: number, trainingPeriod: number
    numberOfParticipants: number, }> = [];
    buttonClicked() {
      let trainingName= this.page8Form.controls['trainingName'].value;
      let trainingDate = this.page8Form.controls['trainingDate'].value;
      let trainingPeriod = this.page8Form.controls['trainingPeriod'].value;
      const numberOfParticipants = this.page8Form.controls['numberOfParticipants'].value;

      // tslint:disable-next-line:max-line-length
      this.rows.push( {trainingName: trainingName, trainingDate: trainingDate, trainingPeriod: trainingPeriod, numberOfParticipants: numberOfParticipants,
        } );
        this.page8Form.reset(); }

  constructor(private implementationService: ImplementationService, ) {}
  onSubmit() {
      this.implementationService.addImplementation(this.page8Form.value);
    }

    // onSaveData() {
    //   this.dataStorageService.storeImplementation().subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
    // }
    // onFetch() {
    //   console.log(this.dataStorageService.getImplementation());
    // }
    onEditData() {
      const implementationInfo = this.implementationService.getImplementationInfo();
      this.page8Form.setValue(implementationInfo);
        }

  ngOnInit() {
    this.page8Form =
    new FormGroup({
      'gonShare': new FormControl(this.gshare, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'wuaShare': new FormControl(this.wsahre, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'physicalProgress': new FormControl(this.phyp, [Validators.required, ]),
      'physicalProgressDate': new FormControl(this.phypdate, [Validators.required, ]),
      'finiancialProgress': new FormControl(this.finp, [Validators.required, ]),
      'finiancialProgressDate': new FormControl(this.finpdate, [Validators.required, ]),
      'wuaDevelopmentOffice': new FormControl(this.wuado, [Validators.required, ]),
      'wuaRegistrarionDate': new FormControl(this.wuard, [Validators.required, ]),
      'trainingName': new FormControl(this.tn, [Validators.required, ]),
      'trainingDate': new FormControl(this.td, [Validators.required, ]),
      'trainingPeriod': new FormControl(this.tp, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'numberOfParticipants': new FormControl(this.nop, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

    }
    );
  }
}