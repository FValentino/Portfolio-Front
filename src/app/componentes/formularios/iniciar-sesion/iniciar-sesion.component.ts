import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  form:FormGroup;
  alerta:boolean = false;

  constructor (private formBuilder:FormBuilder, private autenticacion : AutenticacionService, private ruta:Router){
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  
  onEnviar (event:Event){
    event.preventDefault;
    this.autenticacion.iniciarSesion(this.form.value).subscribe(data => {

      if (data!=null){
        this.ruta.navigate(['/portfolio']);
      }
      else{
        this.alerta=true;
        this.ruta.navigate(['/iniciar-sesion']);
      }
    });
  }

  closeAlerta(){
    this.alerta = false;
  }

  get Email(){
    return this.form.get('email');
  }

  get Password (){
    return this.form.get('password');
  }
}
