import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './component/booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorValidateComponent } from './component/error-validate/error-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ErrorValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
