import { Component, OnInit } from '@angular/core';
import { ImplementationService } from '../implementation.service';
import { Implementation } from '../implementation-info.model';
import { ImpTable } from '../table.model';

@Component({
  selector: 'app-implementation-view',
  templateUrl: './implementation-view.component.html',
  styleUrls: ['./implementation-view.component.scss']
})
export class ImplementationViewComponent implements OnInit {

  constructor(private implementationService: ImplementationService) { }

  implementation: Array<Implementation>;
  imptable: Array<ImpTable>;
  ngOnInit() {
  this.implementationService.getAll().subscribe(data => {
    this.implementation = data;
    console.log(data);
  });
  this.implementationService.getAllimpTable().subscribe(data => {
    this.imptable = data;
    console.log(data);
});
  }
}
