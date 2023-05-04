import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraerDatosService {

  urlPersona : string = "http://localhost:8080/portfolio/persona"; 
  urlEducacion : string = "http://localhost:8080/portfolio/educacion"; 
  urlTecnologias : string = "http://localhost:8080/portfolio/tecnologias"; 
  urlProyectos : string = "http://localhost:8080/portfolio/proyectos"; 

  constructor( private http : HttpClient) { }

  obtenerDatosPersona() : Observable <any> {
    return this.http.get<any>(this.urlPersona);
  }

  obtenerDatosEducacion() : Observable <any> {
    return this.http.get<any>(this.urlEducacion);
  }

  obtenerDatosTecnologias() : Observable <any> {
    return this.http.get<any>(this.urlTecnologias);
  }

  obtenerDatosProyectos() : Observable <any> {

    return this.http.get<any>(this.urlProyectos);
  }
}
