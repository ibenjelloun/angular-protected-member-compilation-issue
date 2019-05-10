import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-failing-child',
  template: '{{ variable }}'
})
export class FailingChildComponent extends ParentComponent {

}
