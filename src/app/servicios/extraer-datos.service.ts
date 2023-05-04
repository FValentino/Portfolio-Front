import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraerDatosService {

  urlPersona : string = "http://localhost:8080/portfolio/persona"; 
  

  constructor( private http : HttpClient) { }

  obtenerDatosPersona() : Observable <any> {
    return this.http.get<any>(this.urlPersona);
  }

  
}
