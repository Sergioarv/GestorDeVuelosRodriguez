import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/model/vuelo';
import { VuelosService } from 'src/app/service/vuelos.service';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  vuelosList: Vuelo[];
  public displayDialogEdit = true;

  constructor(
    private vueloService: VuelosService,
    private route: Router,
  ) {
    // Construtor de Vuelos
    this.vuelosList = [];
  }

  ngOnInit(): void {
    // ngOnit
    this.getVuelos();
  }

  getVuelos(): void {
    this.vueloService.getVuelos().subscribe( resp => {
      this.vuelosList = resp;
    });
  }

  openEditForm(vuelo: Vuelo): void {
    localStorage.setItem("id", vuelo.idVuelo);
    this.route.navigate(['vuelos/edit'])
  }

}
