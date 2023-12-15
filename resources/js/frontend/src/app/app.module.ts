import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import {LandingPageModule} from "./landing-page/components/landing-page.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    LandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
