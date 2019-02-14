import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  pageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.pageForm = new FormGroup({
      'ecologicalRegion': new FormControl(null, [Validators.required, ]),
      'nearestRoad': new FormControl(null, [Validators.required,]),
      'distance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nearestAirport': new FormControl(null, [Validators.required, ]),
      'airportDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nearestMarket': new FormControl(null, [Validators.required,]),
      'marketDistance': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'localRiverBasin': new FormControl(null, [Validators.required,]),
      'majorRiverBasin': new FormControl(null, [Validators.required, ]),
      'riverSource': new FormControl(null, [Validators.required, ]),
      'province': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'district': new FormControl(null, [Validators.required,]),
      'ward': new FormControl(null, [Validators.required,]),
      'metroCity': new FormControl(null, [Validators.required, ]),
      'subMetroCity': new FormControl(null, [Validators.required, ]),
      'municipality': new FormControl(null, [Validators.required, ]),
      'localBodyType': new FormControl(null, [Validators.required, ]),
      'ruralMunicipality': new FormControl(null, [Validators.required, ]),

    });
  }

}
