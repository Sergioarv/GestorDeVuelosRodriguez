import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  vueloEdit!: Vuelo;

  editForm = new FormGroup({
    id: new FormControl(''),
    fecha: new FormControl(''),
    aerolinea: new FormControl(''),
    ruta: new FormControl('')
  });

  constructor(
    private vueloService: VuelosService,
    private route: Router,
    private dateFormat: DatePipe
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
    this.vueloEdit = vuelo;
    this.editForm.controls['fecha'].setValue(this.dateFormat.transform(vuelo.fecha_vuelo, 'yyyy-MM-dd'));
    this.editForm.controls['aerolinea'].setValue(vuelo.aerolinea_idAerolinea.nombreAerolinea);
    this.editForm.controls['ruta'].setValue(vuelo.ruta_idRuta.idRuta);
  }

  guardar(): void {
    this.vueloEdit.fecha_vuelo = this.editForm.controls['fecha'].value;
    this.vueloEdit.aerolinea_idAerolinea = this.editForm.controls['aerolinea'].value;
    this.vueloEdit.ruta_idRuta.idRuta = this.editForm.controls['ruta'].value;
    console.log("Guardar", this.vueloEdit);
  }

}
