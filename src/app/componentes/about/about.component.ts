import { Component, OnInit } from '@angular/core';

//servicios
import { ExtraerDatosService } from '../../servicios/extraer-datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  yo : any;


  constructor(private datos : ExtraerDatosService) {}

  ngOnInit(): void {
      this.datos.obtenerDatosPersona().subscribe(dato => {
        this.yo = dato;
      });
  }

}
