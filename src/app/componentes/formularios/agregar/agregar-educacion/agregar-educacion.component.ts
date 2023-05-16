import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent {
  form : FormGroup;
  previsualizacionUrl : string = "";
  previsualizacionVis : boolean = false;

  constructor(private imagenes : ImagenesService, private formBuilder : FormBuilder, 
              private crud : CRUDEducacionService, private sanitizer : DomSanitizer){
    this.form = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      titulo : ['', [Validators.required]],
      fechaInicio : ['', [Validators.required]],
      fechaFin : ['', [Validators.required]],
      urlImagen : ['']
    });
  }

  cargarImagen(event : any){
    this.previsualizacionVis = true;
    this.previsualizacion(event);
    this.imagenes.cargarImagen(event, 'educacion', this.Nombre?.value);
  } 

  onEnviar(event : any){

    event.preventDefault();

    this.form.patchValue({
      urlImagen : this.imagenes.url
    });

    this.crud.onEnviar(this.form.value).subscribe(data => {
      this.crud.recargar();
    });

  }
  
  get Nombre(){
    return this.form.get('nombre');
  }

  get Titulo(){
    return this.form.get('titulo');
  }

  get FechaInicio(){
    return this.form.get('fechaInicio');
  }

  get FechaFin(){
    return this.form.get('fechaFin');
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
