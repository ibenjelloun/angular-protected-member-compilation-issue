import { Component } from '@angular/core';

@Component({
  selector: 'app-succeeding-child',
  template: '<ng-container *ngIf="true"> {{ variable }} </ng-container>'
})
export class SucceedingChildComponent {
  private variable
}
