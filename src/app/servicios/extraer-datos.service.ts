import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraerDatosService {

  urlPersona : string = "https://back-portfolio-cedh.onrender.com/portfolio/persona"; 
  urlTecnologia : string = "https://back-portfolio-cedh.onrender.com/portfolio/tecnologia";
  urlEducacion : string = "https://back-portfolio-cedh.onrender.com/portfolio/educacion";
  

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
