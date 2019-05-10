import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FailingChildComponent } from './failing-child.component';
import { SucceedingChildComponent } from './succeeding-child.component';

@NgModule({
  declarations: [AppComponent, FailingChildComponent, SucceedingChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
