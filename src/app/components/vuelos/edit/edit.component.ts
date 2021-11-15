import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Aerolinea } from 'src/app/model/aerolinea';
import { Vuelo } from 'src/app/model/vuelo';
import { AerolineaService } from 'src/app/service/aerolinea.service';
import { VuelosService } from 'src/app/service/vuelos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RutasService } from 'src/app/service/rutas.service';
import { Ruta } from 'src/app/model/ruta';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  vueloEdit: Vuelo;
  aerolineaList: Aerolinea[];
  rutaList: Ruta[];
  isAlert = true;
  dateNow!: Date;

  editForm = new FormGroup({
    aerolinea: new FormControl(),
    ruta: new FormControl(),
    fecha: new FormControl()
  });

  constructor(
    private vuelosService: VuelosService,
    private aerolineaService: AerolineaService,
    private rutaService: RutasService,
    private dateFormat: DatePipe,
    private route: Router,
    private toastrService: ToastrService,
    private translate: TranslateService
  ) {
    this.aerolineaList = [];
    this.rutaList = [];
    this.vueloEdit = new Vuelo;
    this.dateNow = new Date();
  }

  ngOnInit(): void {
    this.getVueloEdit();
    this.getAerolinea();
    this.getRuta();
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

  getVueloEdit(): void {
    const id = localStorage.getItem('vueloEdit');
    this.vuelosService.getVueloById(id).subscribe(resp => {
      this.vueloEdit = resp;
      this.dateNow = this.vueloEdit.fecha_vuelo;
      this.editForm.get('fecha')?.setValue(this.dateFormat.transform(this.dateNow, 'yyyy-MM-dd'));
      this.editForm.get('aerolinea')?.setValue(this.vueloEdit.aerolinea_idAerolinea.id_aerolinea);
      this.editForm.get('ruta')?.setValue(this.vueloEdit.ruta_idRuta.idRuta);
    });
  }

  actualizar(): void {
    const updateDate = this.editForm.controls['fecha'].value;
    this.vueloEdit.fecha_vuelo = updateDate == null ? this.vueloEdit.fecha_vuelo : updateDate;
    this.vueloEdit.aerolinea_idAerolinea.id_aerolinea = this.editForm.controls['aerolinea'].value;
    this.vueloEdit.ruta_idRuta.idRuta = this.editForm.controls['ruta'].value;
    this.vuelosService.updateVuelo(this.vueloEdit).subscribe(resp => {
      this.toastrService.success(this.translate.instant("mensajes.vueloEditado"), this.translate.instant("mensajes.procesoExitoso"), { timeOut: 2000, closeButton: true});
      this.route.navigate(['/vuelos']);
    },
      error => {
        this.toastrService.error(this.translate.instant("mensajes.vueloNoEditado"), this.translate.instant("mensajes.procesoFallido"), { timeOut: 2000, closeButton: true});
      });
  }
}
