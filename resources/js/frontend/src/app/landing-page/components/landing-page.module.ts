import {LandingPageComponent} from "./landing-page.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
