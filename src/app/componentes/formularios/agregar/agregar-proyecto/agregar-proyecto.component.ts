import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CRUDProyectoService } from 'src/app/servicios/crud-proyecto.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent {

  form : FormGroup;
  previsualizacionUrl : any;
  previsualizacionVis : boolean = false;
  botonActivo : boolean = true;

  constructor (private formBuilder : FormBuilder, private imagen : ImagenesService,
      private sanitizer : DomSanitizer, private ruta : Router, private crud : CRUDProyectoService){

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      urlProyecto: ['', [Validators.required]],
      urlImagen: ['']
    });
  } 

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.previsualizacionVis = true;
    this.imagen.cargarImagen(event, 'proyectos', this.Nombre?.value);
  }

  activarBoton(){
    if (this.Nombre?.value != "" && this.Descripcion?.value != "" && this.UrlProyecto?.value != ""){ 
      this.botonActivo = false; 
    }else{
      this.botonActivo = true;
    }
  }

  onEnviar(event : any){
    event.preventDefault();

    this.form.patchValue({
      urlImagen : this.imagen.url
    });

    this.crud.onEnviar(this.form.value).subscribe(data => {
      this.crud.recargar();
    });
  }

  cancelar(){
    if (this.imagen.url != ""){
      this.imagen.borrarImagen('proyecto', this.Nombre?.value);
    }
    this.ruta.navigate(['/proyecto']);
  }

  get Nombre (){
    return this.form.get('nombre');
  }

  get Descripcion (){
    return this.form.get('descripcion');
  }

  get UrlProyecto (){
    return this.form.get('urlProyecto');
  }
  
  private previsualizacion (event : any){
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then(( img : any )=>{
      this.previsualizacionUrl = img.base;
    });
  }

  extraerBase64 = async (event : any) => new Promise( resolve =>{
    try{
      const unsafeImg = window.URL.createObjectURL(event);
      const img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL(event);
      reader.onload = () => {
        resolve({
          base : reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base : null
        });
      }
    } catch (e){
      return null;
    }
  });
  
}
