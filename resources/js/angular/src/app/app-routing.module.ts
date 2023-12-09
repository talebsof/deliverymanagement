import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreurComponent } from './livreur/livreur.component';

const routes: Routes = [
  { path: 'livreurs', component: LivreurComponent },
  // Add more routes here as needed
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect empty path to home
  // { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
