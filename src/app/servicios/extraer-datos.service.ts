import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraerDatosService {

  urlPersona : string = "http://localhost:8080/portfolio/persona"; 
  urlTecnologia : string = "http://localhost:8080/portfolio/tecnologia";
  urlEducacion : string = "http://localhost:8080/portfolio/educacion";
  

  constructor( private http : HttpClient) { }

  obtenerDatosPersona() : Observable <any> {
    return this.http.get<any>(this.urlPersona);
  }

  obtenerDatosTecnologia() : Observable <any> {
    return this.http.get<any>(this.urlTecnologia);
  }
  
  obtenerDatosEducacion() : Observable <any> {
    return this.http.get<any>(this.urlEducacion);
  }
}
