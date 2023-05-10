import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-educacion-menu',
  templateUrl: './educacion-menu.component.html',
  styleUrls: ['./educacion-menu.component.css']
})
export class EducacionMenuComponent implements OnInit{

  educacion : any;

  constructor(private extraerDatos : ExtraerDatosService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosEducacion().subscribe(dato => {
      this.educacion = dato;
    });
  }
}
