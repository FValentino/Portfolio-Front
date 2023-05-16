import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  urlInicio:string = "https://back-portfolio-cedh.onrender.com/portfolio/usuario/iniciar-sesion";
  urlCerrar:string = "https://back-portfolio-cedh.onrender.com/portfolio/usuario/cerrar-sesion";


  userSubject: BehaviorSubject<any>;

  constructor(private http : HttpClient ) { 
    this.userSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  get UsuarioAutenticado(){
    return this.userSubject.value;
  }

  iniciarSesion (credenciales:any):Observable <any>{
    return this.http.post(this.urlInicio, credenciales).pipe(map(data=>{
      
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.userSubject.next(data);
    
      return data;
    }));
  }

  cerrarSesion (): Observable <any>{
    return this.http.post(this.urlCerrar, null).pipe(map(data=>{
      
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.userSubject.next(data);
    
      return data;
    }));
  }

  recargar() : void{
    window.location.reload();
  }
}
