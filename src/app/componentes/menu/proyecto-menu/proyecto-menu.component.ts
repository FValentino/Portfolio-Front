import { Component, OnInit } from '@angular/core';
import { CRUDProyectoService } from 'src/app/servicios/crud-proyecto.service';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-proyecto-menu',
  templateUrl: './proyecto-menu.component.html',
  styleUrls: ['./proyecto-menu.component.css']
})
export class ProyectoMenuComponent {

  private carpeta : string = "proyecto";

  proyecto : any;

  constructor(private extraerDatos : ExtraerDatosService, private crud : CRUDProyectoService, 
    private imagen : ImagenesService){}

  ngOnInit(): void {
    this.extraerDatos.obtenerDatosProyecto().subscribe(dato => {
      this.proyecto = dato;
    });
  }

  borrarRegistro(proyecto : any){

    this.imagen.borrarImagen(this.carpeta, proyecto.nombre);
    this.crud.onBorrar(proyecto.id).subscribe(data => {
      this.crud.recargar();
    });
  }

}
