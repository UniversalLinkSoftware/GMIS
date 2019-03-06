import { Component, OnInit } from '@angular/core';
import { Economic } from '../economic-info.model';
import { EconomicService } from '../economic.service';

<<<<<<< HEAD

=======
>>>>>>> 3f787e0118041d94b7b96d4d88170e888f0095ca
@Component({
  selector: 'app-economic-view',
  templateUrl: './economic-view.component.html',
  styleUrls: ['./economic-view.component.scss']
})
export class EconomicViewComponent implements OnInit {

  constructor(private economicService: EconomicService) {

<<<<<<< HEAD
   }
    economic: Array<Economic>;
    ngOnInit() {
    this.economicService.getAll().subscribe(data => {
      this.economic = data;
    });
  }
=======
  }
   economic: Array<Economic>;
   ngOnInit() {
   this.economicService.getAll().subscribe(data => {
     this.economic = data;
   });
 }
>>>>>>> 3f787e0118041d94b7b96d4d88170e888f0095ca

}
