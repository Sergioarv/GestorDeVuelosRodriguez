import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VuelosComponent } from '../components/vuelos/vuelos.component';

const routes: Routes = [
  { path: 'vuelos', component: VuelosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }