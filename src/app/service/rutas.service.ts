import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutaConstant } from '../utils/constants/ruta.constant';
import { Observable } from 'rxjs';
import { GlobalConstant } from '../utils/constants/global.constant';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRutas(): Observable<any> {
    const URL = GlobalConstant.URL_RUTA_ENDPOINT + RutaConstant.URL_RUTA;
    return this.http.get<any>(URL);
  }
}
