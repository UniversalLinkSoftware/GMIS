import { Component, OnInit } from '@angular/core';
import { ImplementationService } from '../implementation.service';
import { Implementation } from '../implementation-info.model';

@Component({
  selector: 'app-implementation-view',
  templateUrl: './implementation-view.component.html',
  styleUrls: ['./implementation-view.component.scss']
})
export class ImplementationViewComponent implements OnInit {

  constructor(private implementationService: ImplementationService) { }

  implementation: Array<Implementation>;
  ngOnInit() {
  this.implementationService.getAll().subscribe(data => {
    this.implementation = data;
    console.log(data);
  });
}
}
