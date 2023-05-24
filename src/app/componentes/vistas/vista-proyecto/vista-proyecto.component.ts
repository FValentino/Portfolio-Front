import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CRUDProyectoService } from 'src/app/servicios/crud-proyecto.service';

@Component({
  selector: 'app-vista-proyecto',
  templateUrl: './vista-proyecto.component.html',
  styleUrls: ['./vista-proyecto.component.css']
})
export class VistaProyectoComponent {

  id : any;
  proyecto : any;

  constructor(private crud : CRUDProyectoService, private route : ActivatedRoute){

    this.id = this.route.snapshot.paramMap.get('id');
    this.crud.onBuscar(this.id).subscribe(dato => {
      this.proyecto = dato;
    });
  }

}
