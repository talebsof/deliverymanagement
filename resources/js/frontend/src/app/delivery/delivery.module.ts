import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import {LivreursComponent} from "./components/livreurs/livreurs.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import {Input} from "postcss";
import { LivraisonsComponent } from './components/livraisons/livraisons.component';
import { TournesComponent } from './components/tournes/tournes.component';
import {HeaderComponent} from "../core/header/header.component";

@NgModule({
  declarations: [
    LivreursComponent,
    GenericTableComponent,
    LivraisonsComponent,
    TournesComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LivreursComponent,
    LivraisonsComponent,
    TournesComponent,
    GenericTableComponent
  ],
  providers: [

  ]
})
export class DeliveryModule { }
