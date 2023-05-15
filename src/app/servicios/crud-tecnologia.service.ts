import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CRUDTecnologiaService {

  private url : string = "http://localhost:8080/portfolio/tecnologia";

  constructor(private http : HttpClient) {}

  onEnviar(datosTec : any) : Observable <any> {
    return this.http.post(this.url + "/agregar", datosTec);
  }

  onBorrar(id : any) : Observable<any>{
    return this.http.delete(this.url + "/borrar?id=" + id);
  }

  onActualizar(id : any, tecnologia : any) : Observable <any>{
    
    return this.http.put(this.url + "/editar/" + id, tecnologia);
  }

  onBuscar(id : any){
    return this.http.get(this.url + "/" + id);
  }

  recargar(){
    window.location.reload();
  }
}
