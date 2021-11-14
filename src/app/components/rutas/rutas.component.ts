import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutasService } from 'src/app/service/rutas.service';
import { Ruta } from '../../model/ruta';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  rutasList: Ruta[];

  constructor(
    private rutaService: RutasService,
    private route: Router,
  ) {
    this.rutasList = [];
   }

  ngOnInit(): void {
    this.getRutas();
  }

  selectRow(ruta: Ruta): void {
    localStorage.setItem('rutaSelect', ruta.idRuta);
    this.route.navigate(['/vuelos']);
  }

  getRutas(): void {
    this.rutaService.getRutas().subscribe(resp => {
      console.log(resp);
      this.rutasList = resp;
    });
  }

}
