import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RutaConstant } from '../utils/constants/ruta.constant';
import { Ruta } from '../model/ruta';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRutas() {
    const URL = RutaConstant.URL_RUTA_ENDPOINT + RutaConstant.URL_RUTA;
    return this.http.get<any>(URL);
  }
}
