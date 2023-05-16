import { Component, OnInit } from '@angular/core';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-educacion-menu',
  templateUrl: './educacion-menu.component.html',
  styleUrls: ['./educacion-menu.component.css']
})
export class EducacionMenuComponent implements OnInit{

  private carpeta : string = "educacion";

  educacion : any;

  constructor(private extraerDatos : ExtraerDatosService, private crud : CRUDEducacionService, 
    private imagen : ImagenesService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosEducacion().subscribe(dato => {
      this.educacion = dato;
    });
  }

  borrarRegistro(edu : any){

    this.imagen.borrarImagen(this.carpeta, edu.nombre);
    this.crud.onBorrar(edu.id).subscribe(data => {
      this.crud.recargar();
    });
  }
}
