import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-succeeding-child',
  template: '<ng-container *ngIf="true"> {{ variable }} </ng-container>'
})
export class SucceedingChildComponent extends ParentComponent {

}
