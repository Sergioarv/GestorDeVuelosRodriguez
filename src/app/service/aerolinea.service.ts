import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AerolineaConstant } from '../utils/constants/aerolinea.constant';
import { GlobalConstant } from '../utils/constants/global.constant';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  constructor(
    private http: HttpClient
  ) { }

  getAerolineas(): Observable<any> {
    const URL = GlobalConstant.URL_ENDPOINT + AerolineaConstant.URL_AEROLINEA;
    return this.http.get<any>(URL);
  }
}
