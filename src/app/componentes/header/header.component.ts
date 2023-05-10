import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  usuarioIniciado:boolean = false;

  constructor(private autenticacion:AutenticacionService, private ruta:Router){
    if (JSON.stringify(this.autenticacion.UsuarioAutenticado) != '{}' &&
        JSON.stringify(this.autenticacion.UsuarioAutenticado) != 'null' ){
      this.usuarioIniciado = true;
    }
    else{
      this.usuarioIniciado = false;
    }

  }

  cerrarSesion(){
    this.autenticacion.cerrarSesion().subscribe(data =>{
      this.usuarioIniciado = false;
      this.autenticacion.recargar();
    });
    
    console.log("USUARIO INCIADO CERRAR SESION: ", this.usuarioIniciado);
  }
}
