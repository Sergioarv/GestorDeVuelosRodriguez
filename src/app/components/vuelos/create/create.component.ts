import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aerolinea } from 'src/app/model/aerolinea';
import { Ruta } from 'src/app/model/ruta';
import { Vuelo } from 'src/app/model/vuelo';
import { AerolineaService } from 'src/app/service/aerolinea.service';
import { RutasService } from 'src/app/service/rutas.service';
import { VuelosService } from 'src/app/service/vuelos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateVuelosComponent implements OnInit {

  aerolineaList: Aerolinea[];
  rutaList: Ruta[];
  newVuelo: Vuelo;
  dateNow!: Date;

  createForm = new FormGroup({
    aerolinea: new FormControl([Validators.required]),
    ruta: new FormControl([Validators.required]),
    fecha: new FormControl()
  });

  constructor(
    private vuelosService: VuelosService,
    private aerolineaService: AerolineaService,
    private rutaService: RutasService,
    private dateFormat: DatePipe,
    private route: Router
  ) {
    this.aerolineaList = [];
    this.rutaList = [];
    this.newVuelo = new Vuelo;
  }

  ngOnInit(): void {
    this.getAerolinea();
    this.getRuta();
    this.dateNow = new Date();
    this.createForm.get('aerolinea')?.setValue("");
    this.createForm.get('ruta')?.setValue("");
    this.createForm.get('fecha')?.setValue(this.dateFormat.transform(this.dateNow, 'yyyy-MM-dd'));
  }

  getAerolinea(): void {
    this.aerolineaService.getAerolineas().subscribe(resp => {
      this.aerolineaList = resp;
    });
  }

  getRuta(): void {
    this.rutaService.getRutas().subscribe(resp => {
      this.rutaList = resp;
    });
  }

  guardar(): void {
    const newDate = this.createForm.controls['fecha'].value;
    this.newVuelo.idVuelo = '-1';
    this.newVuelo.fecha_vuelo = newDate == null ? this.dateNow : newDate;
    this.newVuelo.aerolinea_idAerolinea.id_aerolinea = this.createForm.controls['aerolinea'].value;
    this.newVuelo.ruta_idRuta.idRuta = this.createForm.controls['ruta'].value;

    this.vuelosService.saveVuelo(this.newVuelo).subscribe( resp => {
      this.route.navigate(['/vuelos']);
    },
    error => {
      console.log('ERROR', error);
    });
  }
}
