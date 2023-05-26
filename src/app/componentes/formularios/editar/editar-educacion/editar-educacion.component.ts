import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { FechasService } from 'src/app/servicios/fechas.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit{
  educacion : any;
  previsualizacionUrl : string = "";
  fechaInicio : Date = new Date();
  fechaFin : Date = new Date();
  usuarioActivo : boolean;
  mostrarFecha : boolean = false;
  fechaFinal : any;
  botonActivo : boolean = false;
  private fechaAux : Date = new Date;
  private id : any;

  constructor(private imagenes : ImagenesService, private formBuilder : FormBuilder, 
    private crud : CRUDEducacionService, private sanitizer : DomSanitizer, private route : ActivatedRoute,
    private autenticacion : AutenticacionService, private ruta : Router, private fechas : FechasService){
      
      this.usuarioActivo = this.autenticacion.UsuarioIniciado;
      this.fechaFinal = this.fechas.fechaFinal( this.fechaAux.getFullYear(), this.fechaAux.getMonth());
      
  }

  form : FormGroup = this.formBuilder.group({});

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    
    this.crud.onBuscar(this.id).subscribe(data => {
      this.educacion = data;
      this.previsualizacionUrl = this.educacion.urlImagen;
      this.fechaInicio = this.educacion.fechaInicio;
      this.fechaFin = this.educacion.fechaFin;

      this.form = this.formBuilder.group({
        nombre : [this.educacion.nombre, [Validators.required]],
        carrera: [this.educacion.carrera, [Validators.required]],
        titulo : [this.educacion.titulo],
        fechaInicio : [this.educacion.fechaInicio, [Validators.required]],
        fechaFin : [this.educacion.fechaFin],
        urlImagen : [this.educacion.urlImagen]
      });

      this.mostrarFecha = this.FechaFin?.value != '';
    });
  }

  establecerFecha(){
    this.mostrarFecha = this.fechas.fechaInicio(this.FechaInicio?.value);
    this.activarBoton();
  }

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.imagenes.cargarImagen(event, 'educacion', this.Nombre?.value);
  } 

  actualizarRegistro(event : any){

    let imagenUrl : string = this.educacion.urlImagen;

    event.preventDefault();

    if(this.imagenes.url != "" && this.imagenes.url != this.educacion.urlImagen){
      
      imagenUrl = this.imagenes.url;
    }

    this.form.patchValue({
      urlImagen : imagenUrl
    });

    this.crud.onActualizar(this.id, this.form.value).subscribe(data => {
      this.crud.recargar();
    });

  }

  cancelar(){
    if (this.imagenes.url != this.previsualizacionUrl){
      this.imagenes.borrarImagen('educacion', this.Nombre?.value);
    }
    this.ruta.navigate(['/educacion']);
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
