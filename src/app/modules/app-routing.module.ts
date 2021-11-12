import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RutasComponent } from '../components/rutas/rutas.component';
import { EditComponent } from '../components/vuelos/edit/edit.component';
import { VuelosComponent } from '../components/vuelos/vuelos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'vuelos', component: VuelosComponent },
  { path: 'vuelos/edit', component: EditComponent },
  { path: 'rutas', component: RutasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
