import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ruta } from 'src/app/model/ruta';
import { Vuelo } from 'src/app/model/vuelo';
import { RutasService } from 'src/app/service/rutas.service';
import { VuelosService } from 'src/app/service/vuelos.service';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  vuelosList: Vuelo[];
  rutaList: Ruta[];

  date: Date;
  mensaje = '';

  conectorInvalido = false;

  filterForm = new FormGroup({
    ruta: new FormControl(),
    fecha: new FormControl(),
    conector: new FormControl([Validators.pattern('^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$')])
  });

  constructor(
    private vueloService: VuelosService,
    private rutaService: RutasService,
    private route: Router,
    private dateFormat: DatePipe
  ) {
    // Construtor de Vuelos
    this.vuelosList = [];
    this.rutaList = [];
    this.date = new Date;
  }

  ngOnInit(): void {
    // ngOnit
    this.getVuelos();
    this.getRuta();
    this.filterForm.get('ruta')?.setValue("");
    this.filterForm.get('conector')?.setValue("");
    this.filterForm.get('fecha')?.setValue(null);
    this.mensaje = '';
    const idRuta = localStorage.getItem('rutaSelect');
    idRuta != null ? this.getVueloByRuta(idRuta) : null;
  }

  getVuelos(): void {
    this.vueloService.getVuelos().subscribe(resp => {
      this.vuelosList = resp;
    });
  }

  getVueloByRuta(idRuta: any): void {
    this.vueloService.filterVuelos(null, idRuta, null).subscribe(resp => {
      this.vuelosList = resp;
      this.filterForm.get('ruta')?.setValue(idRuta);
    })
  }

  getRuta(): void {
    this.rutaService.getRutas().subscribe(resp => {
      this.rutaList = resp;
    });
  }

  openEditForm(vueloEdit: Vuelo): void {
    localStorage.setItem('vueloEdit', vueloEdit.idVuelo);
    this.route.navigate(['/vuelos/edit']);
  }

  deleteVuelos(vuelo: any): void {
    console.log('Borrar', vuelo);
    this.vueloService.deleteVuelo(vuelo).subscribe( resp => {
      this.limpiar();
    });
  }

  filter(idRuta?: any): void {
    const conector = this.filterForm.controls['conector'].value;
    const fecha = this.filterForm.controls['fecha'].value;
    const ruta = this.filterForm.controls['ruta'].value;
    const fechaValid = this.filterForm.controls['fecha'].valid;

    this.mensaje = this.validarParametrosFiltro(conector, ruta, fechaValid);
    if (this.mensaje === '') {
      this.vueloService.filterVuelos(fecha ? fecha : null, ruta ? ruta : null, conector ? conector : null).subscribe(resp => {
        this.vuelosList = resp;
      });
    }
  }

  limpiar(): void {
    this.getVuelos();
    this.getRuta();
    this.filterForm.get('ruta')?.setValue("");
    this.filterForm.get('conector')?.setValue("");
    this.filterForm.get('fecha')?.setValue(null);
    this.mensaje = '';
    localStorage.clear();
  }

  validarParametrosFiltro(conector: any, ruta: any, fechaValid: any): string {
    if (fechaValid && ruta !== '' && conector === '') {
      this.conectorInvalido = true;
      return 'Por favor seleccione un conector';
    } else if (!fechaValid && ruta === '' && conector !== '') {
      this.conectorInvalido = true;
      return 'Por favor seleccione una fecha y una ruta';
    } else if (conector === '' && !fechaValid && ruta === '') {
      this.conectorInvalido = true;
      return 'Por favor seleccion un parametro de busqueda';
    } else if ((conector !== '' && fechaValid && ruta === '') || (conector !== '' && !fechaValid && ruta !== '')) {
      this.conectorInvalido = true;
      return 'Por favor seleccione los 3 parametros de busqueda o quite el conector';
    } else {
      this.conectorInvalido = false;
      return '';
    }
  }

}
