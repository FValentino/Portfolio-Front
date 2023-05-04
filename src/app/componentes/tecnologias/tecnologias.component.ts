import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit{

  technologies : any;
  
  constructor(private datos : ExtraerDatosService) {}

  ngOnInit(): void {
      this.datos.obtenerDatosTecnologias().subscribe(dato => {
        this.technologies = dato.img.technologies;
      });
  }

}
