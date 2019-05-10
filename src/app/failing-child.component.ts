import { Component } from '@angular/core';

@Component({
  selector: 'app-failing-child',
  template: '{{ variable }}'
})
export class FailingChildComponent {
  private variable;
}
