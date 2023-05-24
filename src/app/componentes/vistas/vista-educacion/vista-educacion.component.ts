import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-vista-educacion',
  templateUrl: './vista-educacion.component.html',
  styleUrls: ['./vista-educacion.component.css']
})
export class VistaEducacionComponent implements OnInit{

  id : any;
  educacion : any;
  titulo : string = " ";
  fin : string = "En proceso";

  constructor(private imagenes : ImagenesService, private crud : CRUDEducacionService, 
    private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crud.onBuscar(this.id).subscribe(data => {
      this.educacion = data;
    });
  }
  ngOnInit(): void {
    if (this.educacion.titulo != ''){
      this.titulo = this.educacion.titulo;
    }

    if (this.educacion.fechaFin != ''){
      this.fin = this.educacion.fechaFin;
    }
  }
}
