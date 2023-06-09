import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CRUDTecnologiaService } from 'src/app/servicios/crud-tecnologia.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-agregar-tecnologia',
  templateUrl: './agregar-tecnologia.component.html',
  styleUrls: ['./agregar-tecnologia.component.css']
})

export class AgregarTecnologiaComponent {

  form : FormGroup;
  previsualizacionUrl : string = "";
  previsualizacionVis : boolean = false;
  botonActivo : boolean = true;

  constructor(private imagenes : ImagenesService, private formBuilder : FormBuilder, 
              private crud : CRUDTecnologiaService, private sanitizer : DomSanitizer,
              private ruta : Router){
      
      
    
    this.form = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      urlImagen : ['']
    });
  }

  cargarImagen(event : any){
    this.previsualizacionVis = true;
    this.previsualizacion(event);
    this.imagenes.cargarImagen(event, 'tecnologias', this.NombreValue);
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

  activarBoton(){
    if (this.Nombre?.value != ""){
      this.botonActivo = false;
    } else{
      this.botonActivo = true;
    }
  }

  cancelar(){
    if (this.imagenes.url != ""){
      this.imagenes.borrarImagen('tecnologias', this.Nombre?.value);
    }
    this.ruta.navigate(['/tecnologia']);
  }

  get NombreValue(){
    return this.form.get('nombre')?.value;
  } 
  
  get Nombre(){
    return this.form.get('nombre');
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
