import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDEducacionService {

  private url : string = "https://back-portfolio-cedh.onrender.com/portfolio/educacion";

  constructor(private http : HttpClient) {}

  onEnviar(datosEdu : any) : Observable <any> {
    return this.http.post(this.url + "/agregar", datosEdu);
  }

  onBorrar(id : any) : Observable<any>{
    return this.http.delete(this.url + "/borrar?id=" + id);
  }

  onActualizar(id : any, educacion : any) : Observable <any>{
    
    return this.http.put(this.url + "/editar/" + id, educacion);
  }

  onBuscar(id : any){
    return this.http.get(this.url + "/" + id);
  }

  recargar(){
    window.location.reload();
  }
}
