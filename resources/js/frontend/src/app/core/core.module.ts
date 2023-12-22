import {LOCALE_ID, NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {CommonModule, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
})
export class CoreModule {
  constructor() {
  }
}
