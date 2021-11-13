import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RutasService } from './service/rutas.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './components/vuelos/edit/edit.component';
import { CreateVuelosComponent } from './components/vuelos/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VuelosComponent,
    RutasComponent,
    HomeComponent,
    EditComponent,
    CreateVuelosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
