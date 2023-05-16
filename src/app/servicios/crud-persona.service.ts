import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDPersonaService {

  private url : string = "http://localhost:8080/portfolio/persona";

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
