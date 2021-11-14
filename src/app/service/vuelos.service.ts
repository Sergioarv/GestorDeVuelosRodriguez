import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../model/vuelo';
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

  filterVuelos(fechaVuelo: any, idRuta: any, conector: any): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS + VueloConstant.FILTER_VUELOS;
    let params = '';
    // tslint:disable-next-line: max-line-length
    params = fechaVuelo ? (params.length > 0 ? params.concat('&fechaVuelo=').concat(fechaVuelo) : params.concat('?fechaVuelo=').concat(fechaVuelo)) :  params;
    params = idRuta ? (params.length > 0 ? params.concat('&idRuta=').concat(idRuta) : params.concat('?idRuta=').concat(idRuta)) : params;
    // tslint:disable-next-line: max-line-length
    params = conector ? (params.length > 0 ? params.concat('&conector=').concat(conector) : params.concat('?conector=').concat(conector)) : params;
    return this.http.get<any>(URL + params);
  }

  updateVuelo(vuelo: any): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.put<any>(URL, vuelo);
  }

  saveVuelo(vuelo: any): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.post<any>(URL, vuelo);
  }

  deleteVuelo(vueloDelete: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: vueloDelete,
    };

    const URL = GlobalConstant.URL_ENDPOINT + VueloConstant.URL_VUELOS;
    return this.http.delete(URL, options);
  }
}
