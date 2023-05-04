import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  usuarioIniciado:boolean = false;

  constructor(private autenticacion:AutenticacionService, private ruta:Router){

    if (JSON.stringify(this.autenticacion.UsuarioAutenticado) != "{}"){
      this.usuarioIniciado = true;
    }
  }

  cerrarSesion(){
    this.usuarioIniciado = false;
    sessionStorage.removeItem('currentUser');
    window.location.reload();
  }
}
