import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDProyectoService {

  private url : string = "https://back-portfolio-cedh.onrender.com/portfolio/proyecto";

  constructor(private http : HttpClient) {}

  onEnviar(datosPryoecto : any) : Observable <any> {
    return this.http.post(this.url + "/agregar", datosPryoecto);
  }

  onBorrar(id : any) : Observable<any>{
    return this.http.delete(this.url + "/borrar?id=" + id);
  }

  onActualizar(id : any, proyecto : any) : Observable <any>{
    
    return this.http.put(this.url + "/editar/" + id, proyecto);
  }

  onBuscar(id : any){
    return this.http.get(this.url + "/" + id);
  }

  recargar(){
    window.location.reload();
  }
}
