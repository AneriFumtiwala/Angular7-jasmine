import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDateCounterComponent } from './src/components/custom-date-counter/custom-date-counter.component';
import { DateValidatorService } from './src/services/date-validator.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CustomDateCounterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DateValidatorService]
})
export class AppModule { }

