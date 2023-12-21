import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import {LandingPageModule} from "./landing-page/components/landing-page.module";
import {CommonModule} from "@angular/common";
import { DeliveryPersonsComponent } from './delivery/components/delivery-persons/delivery-persons.component';
import {DeliveryModule} from "./delivery/delivery.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DeliveryModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    LandingPageModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
