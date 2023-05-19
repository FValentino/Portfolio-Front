import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDPersonaService {

 private url : string = "https://back-portfolio-cedh.onrender.com/portfolio/persona";

  constructor(private http : HttpClient) {}

  onActualizar(persona : any) : Observable <any>{
    return this.http.put(this.url + "/editar", persona);
  }

  onBuscar(){
    return this.http.get(this.url);
  }

  recargar(){
    window.location.reload();
  }


}
