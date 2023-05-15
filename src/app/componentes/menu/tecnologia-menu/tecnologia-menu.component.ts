import { Component, OnInit } from '@angular/core';
import { CRUDTecnologiaService } from 'src/app/servicios/crud-tecnologia.service';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-tecnologia-menu',
  templateUrl: './tecnologia-menu.component.html',
  styleUrls: ['./tecnologia-menu.component.css']
})
export class TecnologiaMenuComponent implements OnInit{

  private carpeta : string = "tecnologias";

  tecnologias : any;


  constructor(private extraerDatos : ExtraerDatosService, private crud : CRUDTecnologiaService, 
              private imagen : ImagenesService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosTecnologia().subscribe(dato => {
      this.tecnologias = dato;
    });
  }

  borrarRegistro(tec : any){

    this.imagen.borrarImagen(this.carpeta, tec.nombre);
    this.crud.onBorrar(tec.id).subscribe(data => {
      this.crud.recargar();
    });
  }

}
