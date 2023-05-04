import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacion : AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticacion.UsuarioAutenticado;

    if (currentUser && currentUser.accessToken){
      req = req.clone({
        setHeaders:{
          Authorizacion:`Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(req);
  }
}
