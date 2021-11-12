import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstant } from '../utils/constants/global.constant';
import { VueloConstant } from '../utils/constants/vuelo.constant';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(
    private http: HttpClient
  ) { }

  getVuelos(): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.get<any>(URL);
  }

  getVueloById(idVuelo: any): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.get<any>(URL + '/' + idVuelo);
  }

  updateVuelo(vuelo: any): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.put<any>(URL, vuelo);
  }
}
