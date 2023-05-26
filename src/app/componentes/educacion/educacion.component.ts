import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educacion : any;

  constructor (private extraerDatos : ExtraerDatosService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosEducacion().subscribe(dato => {
      this.educacion = dato;
    });
  }

}
