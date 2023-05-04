import { Component } from '@angular/core';

//servicios
import { CargarScriptService } from './servicios/cargar-script.service';
import { ExtraerDatosService } from './servicios/extraer-datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cargarScrpit: CargarScriptService) {
    cargarScrpit.carga(["main"]);
  }
}
