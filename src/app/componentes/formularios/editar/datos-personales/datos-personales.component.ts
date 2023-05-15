import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit{

  persona : any;

  constructor(private extraerDatos : ExtraerDatosService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosPersona().subscribe(dato => {
      this.persona = dato;
    });
  }

}
