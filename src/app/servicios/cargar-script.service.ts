import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

  carga (archivos : string[]) {
    for (let archivo of archivos){
      let script = document.createElement("script");

      script.src = "../assets/js/" + archivo + ".js";
      document.body.appendChild(script);
    }
  }
}
