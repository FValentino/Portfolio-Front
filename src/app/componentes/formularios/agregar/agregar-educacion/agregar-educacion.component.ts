import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { FechasService } from 'src/app/servicios/fechas.service';
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
  mostrarFecha : boolean = false;
  fechaFinal : any;
  botonActivo : boolean = true;
  private fechaAux : Date = new Date;

  constructor(private imagenes : ImagenesService, private formBuilder : FormBuilder, 
              private crud : CRUDEducacionService, private sanitizer : DomSanitizer,
              private ruta : Router, private fechas : FechasService){
    this.form = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      titulo : ['', ],
      fechaInicio: ['', [Validators.required]],
      fechaFin : [''],
      urlImagen : ['']
    });
    this.fechaFinal = this.fechas.fechaFinal( this.fechaAux.getFullYear(), this.fechaAux.getMonth());
  }

  establecerFecha(){
    this.mostrarFecha = this.fechas.fechaInicio(this.FechaInicio?.value);
    console.log("MOSTRAR FECHA: " + this.mostrarFecha);
    
  }

  cargarImagen(event : any){
    this.previsualizacionVis = true;
    this.previsualizacion(event);
    this.imagenes.cargarImagen(event, 'educacion', this.Nombre?.value);
  } 

  activarBoton(){

    if ( this.Nombre?.value == ''){
      this.botonActivo = true;
    }
    else if ( this.Carrera?.value == ''){
      this.botonActivo = true;
    }
    else if (this.Titulo?.value != '' && this.FechaFin?.value == ''){
      this.botonActivo = true;
    }
    else if (this.Titulo?.value == '' && this.FechaFin?.value != ''){
      this.botonActivo = true;
    }
    else{
      this.botonActivo = false;
    }
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

  cancelar(){
    if (this.imagenes.url != ""){
      this.imagenes.borrarImagen('educacion', this.Nombre?.value);
    }
    this.ruta.navigate(['/educacion']);
  }
  
  get Nombre(){
    return this.form.get('nombre');
  }

  get Carrera(){
    return this.form.get('carrera');
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
