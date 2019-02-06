import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Groundwater } from './groundwater-info.model';
import { GroundwaterService } from './groundwater.service';
import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-groundwater-info',
  templateUrl: './groundwater-info.component.html',
  styleUrls: ['./groundwater-info.component.scss']
})
export class GroundwaterInfoComponent implements OnInit {

  page6Form: FormGroup;
  groundwaterInfo: Groundwater;
  constructor(private groundwaterService: GroundwaterService, private dataStorageService: DataStorageService ) {}
  onSubmit() {
      this.groundwaterService.addGroundwater(this.page6Form.value);
    }

    onSaveData() {
      this.dataStorageService.storeGroundwater().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    }


  ngOnInit() {
    this.page6Form = new FormGroup({
      'noOfWells': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'wellDepth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'tubeWellSpacing': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'sizeOfTubewells': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'hydrologicalDescription': new FormControl(null, [Validators.required, ]),
      'aquiferType': new FormControl(null, [Validators.required, ]),
      'aquiferMaterials': new FormControl(null, [Validators.required, ]),
      'noOfBranchChannel': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mainChannelLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'outlets': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }
  }

