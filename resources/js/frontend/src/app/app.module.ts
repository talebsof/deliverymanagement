import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import {LandingPageModule} from "./landing-page/components/landing-page.module";
import {CommonModule, DatePipe} from "@angular/common";
import { LivreursComponent } from './delivery/components/livreurs/livreurs.component';
import {DeliveryModule} from "./delivery/delivery.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    LandingPageModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
