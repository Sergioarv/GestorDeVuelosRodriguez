import { Component, OnInit } from '@angular/core';
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
  ) {
    this.rutasList = [];
   }

  ngOnInit(): void {
    this.getRutas();
  }

  getRutas(): void {
    this.rutaService.getRutas().subscribe(resp => {
      console.log(resp);
      this.rutasList = resp;
    });
  }

}
