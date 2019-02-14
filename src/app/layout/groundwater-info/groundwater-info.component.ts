import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Groundwater } from './groundwater-info.model';
import { GroundwaterService } from './groundwater.service';
import { DataStorageService } from '../social-info/data-storage.service';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs';

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
      'tubewellNo': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Location': new FormControl(null, [Validators.required, ]),
      'aquiferMaterial': new FormControl(null, [Validators.required, ]),
      'Latitude': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'totalDrillDepth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Longtitude': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'housingLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Elevation': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'screenLength': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'typeOfTubewell': new FormControl(null, [Validators.required, ]),
      'typeOfScreen': new FormControl(null, [Validators.required, ]),
      'tubewellHousingPipeSize': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpingDischarge': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'tubewellScreenAndCasingPipeSize': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Drawdown': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'staticWaterLevel': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'aquiferStorageCoefficient': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'aquiferTransmissivity': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'brandOfPump': new FormControl(null, [Validators.required, ]),
      'Power': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'sizeOfPumpHouse': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'Head': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'heightOfOverheadTank': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpDischarge': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'volumeOfOverheadTank': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'efficiencyOfMotor': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'efficiencyOfPump': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pumpLoweringDepth': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'columnPipeSize': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'columnType': new FormControl(null, [Validators.required, ]),
      'lengthOf11kvHTTransmissionLine': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'transformerCapacity': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'transmissionLine': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'controlPanel': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'noOfPoles': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'volatageStabilizer': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'typeOfDistributionSystem': new FormControl(null, [Validators.required, ]),
      'noOfOutlets': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'lengthOfOpenChannel': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'sizeOfAlphaAlphaValve': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pipeMaterial': new FormControl(null, [Validators.required, ]),
      'lengthOfPipe': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'noOfSurgeRaiser': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }
  }

