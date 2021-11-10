import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/model/vuelo';
import { VuelosService } from 'src/app/service/vuelos.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idVuelo: any;
  vueloEdit: Vuelo = new Vuelo;

  constructor(
    private vueloService: VuelosService
  ) {
  }

  ngOnInit(): void {
    this.idVuelo = localStorage.getItem('id');
    this.vueloService.getVueloById(this.idVuelo).subscribe(resp => {
      this.vueloEdit = resp;
    });
  }

}
