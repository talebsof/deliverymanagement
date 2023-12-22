import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LivreursComponent} from "./components/livreurs/livreurs.component";
import {LivraisonsComponent} from "./components/livraisons/livraisons.component";
import {TournesComponent} from "./components/tournes/tournes.component";

const routes: Routes = [
  {path:'livreurs',component:LivreursComponent},
  {path:'livraisons',component:LivraisonsComponent},
  {path:'tournes',component:TournesComponent}

]

@NgModule({
  imports: [
    //on ne peut pas utiliser forRoot(routes) car forRoot est appelé une fois sur la racine de l'application
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DeliveryRoutingModule {}

