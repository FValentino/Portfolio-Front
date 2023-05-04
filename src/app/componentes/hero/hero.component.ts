import { Component, OnInit } from '@angular/core';
import { ExtraerDatosService } from '../../servicios/extraer-datos.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  yo : any;

  constructor (private datos:ExtraerDatosService) {}

  ngOnInit(): void {
      this.datos.obtenerDatosPersona().subscribe(dato => {
        console.log("Datos usuario: " + JSON.stringify(dato));
        this.yo = dato;
      });
  }
}
