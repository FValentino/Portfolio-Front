import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-tecnologia-menu',
  templateUrl: './tecnologia-menu.component.html',
  styleUrls: ['./tecnologia-menu.component.css']
})
export class TecnologiaMenuComponent implements OnInit{

  tecnologias : any;

  constructor(private extraerDatos : ExtraerDatosService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosTecnologia().subscribe(dato => {
      this.tecnologias = dato;
    });
  }
}
