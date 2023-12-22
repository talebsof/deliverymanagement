import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  //dire au router de l'app que toutes les routes qui commence avec facesnaps soit pas chargé systymatiquement, il sera chargé qur lorsque l'utilisateur rentre dans un router qui commence par "facesnaps"
  { path: 'app', loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule) }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

