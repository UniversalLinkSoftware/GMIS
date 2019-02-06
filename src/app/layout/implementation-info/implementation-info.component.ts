import { Implementation } from './implementation-info.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImplementationService } from './implementation.service';
import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-implementation-info',
  templateUrl: './implementation-info.component.html',
  styleUrls: ['./implementation-info.component.scss']
})
export class ImplementationInfoComponent implements OnInit {

  
  page8Form: FormGroup;
  implementationInfo:Implementation;
  public rows: Array<{trainingName: string, trainingDate: number, trainingPeriod: number
    numberOfParticipants: number, }> = [];
    buttonClicked() {
      let trainingName= this.page8Form.controls['trainingName'].value;
      let trainingDate = this.page8Form.controls['trainingDate'].value;
      let trainingPeriod=this.page8Form.controls['trainingPeriod'].value;
      let numberOfParticipants=this.page8Form.controls['numberOfParticipants'].value;

      this.rows.push( {trainingName: trainingName, trainingDate:trainingDate, trainingPeriod: trainingPeriod,numberOfParticipants: numberOfParticipants,
        } );
        this.page8Form.reset();}

  constructor(private implementationService: ImplementationService, private dataStorageService: DataStorageService ) {}
  onSubmit() {
      this.implementationService.addImplementation(this.page8Form.value);
    }

    onSaveData() {
      this.dataStorageService.storeImplementation().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    }

  ngOnInit(){
    this.page8Form= 
    new FormGroup({
      'gonShare':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'wuaShare':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'physicalProgress':new FormControl(null,[Validators.required,]),
      'physicalProgressDate':new FormControl(null,[Validators.required,]),
      'finiancialProgress':new FormControl(null,[Validators.required,]),
      'finiancialProgressDate':new FormControl(null,[Validators.required,]),
      'wuaDevelopmentOffice':new FormControl(null,[Validators.required,]),
      'wuaRegistrarionDate':new FormControl(null,[Validators.required,]),
      'trainingName':new FormControl(null,[Validators.required,]),
      'trainingDate':new FormControl(null,[Validators.required,]),
      'trainingPeriod':new FormControl(null,[Validators.required,]),
      'numberOfParticipants':new FormControl(null,[Validators.required,]),
    
    }
    )
  }
}