import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyecto: any

  constructor (private datos : ExtraerDatosService) {}

  ngOnInit(): void {
    this.datos.obtenerDatosProyecto().subscribe(datos => {
      this.proyecto = datos;
    });
  }

}
