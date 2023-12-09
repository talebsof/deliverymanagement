// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {LivreurModule} from "./livreur/livreur.module";


@NgModule({
  imports: [
    LivreurModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule { }
