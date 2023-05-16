import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CRUDEducacionService } from 'src/app/servicios/crud-educacion.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit{
  private id : any;
  educacion : any;
  previsualizacionUrl : string = "";
  fechaInicio : Date = new Date();
  fechaFin : Date = new Date();

  constructor(private imagenes : ImagenesService, private formBuilder : FormBuilder, 
    private crud : CRUDEducacionService, private sanitizer : DomSanitizer, private route : ActivatedRoute,){
  
  }

  form : FormGroup = this.formBuilder.group({});

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    
    this.crud.onBuscar(this.id).subscribe(data => {
      this.educacion = data;
      this.previsualizacionUrl = this.educacion.urlImagen;

      this.fechaInicio = new Date(this.educacion.fechaInicio);
      this.fechaFin = new Date(this.educacion.fechaFin);

      this.form = this.formBuilder.group({
        nombre : [this.educacion.nombre, [Validators.required]],
        titulo : [this.educacion.titulo, [Validators.required]],
        fechaInicio : [this.educacion.fechaInicio, [Validators.required]],
        fechaFin : [this.educacion.fechaFin, [Validators.required]],
        urlImagen : ['']
      });
    });
  }

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.imagenes.cargarImagen(event, 'educacion', this.Nombre?.value);
  } 

  actualizarRegistro(event : any){

    event.preventDefault();

    this.form.patchValue({
      urlImagen : this.imagenes.url
    });

    this.crud.onActualizar(this.id, this.form.value).subscribe(data => {
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
