import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit{

  tecnologia : any;
  tecnologiaUrl: string = "../../../";
  
  constructor(private datos : ExtraerDatosService, private router:Router) {}

  ngOnInit(): void {
    this.datos.obtenerDatosTecnologia().subscribe(dato => {
      this.tecnologia=dato;
    });
  }

  redirigir(){
    this.router.navigate(['/agregar-tecnologia']);
  }
}
