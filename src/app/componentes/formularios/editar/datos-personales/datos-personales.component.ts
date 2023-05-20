import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenesService } from 'src/app/servicios/imagenes.service';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';
import { CRUDPersonaService } from 'src/app/servicios/crud-persona.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit{

  persona : any;
  previsUrl : string = "";

  constructor(private extraerDatos : ExtraerDatosService, private crud : CRUDPersonaService, 
    private imagen : ImagenesService, private sanitizer : DomSanitizer,
    private formBuilder : FormBuilder, private ruta : Router){

  }

  form : FormGroup = this.formBuilder.group({});

  
  ngOnInit(): void {
    this.crud.onBuscar().subscribe(dato => {
      this.persona = dato;
      this.previsUrl = this.persona.urlImagen;
      

      this.form = this.formBuilder.group({
        nombre: [this.persona.nombre,  [Validators.required]],
        apellido: [this.persona.apellido, [Validators.required]],
        ocupacion: [this.persona.ocupacion, [Validators.required]],
        email: [this.persona.email,[Validators.required, Validators.email]],
        telefono: [this.persona.telefono,[Validators.required]],
        localizacion: [this.persona.localizacion,[Validators.required]],
        descripcion: [this.persona.descripcion,[Validators.required]],
        urlImagen: ['']
      });
    });
    
  }

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.imagen.cargarImagen (event, 'persona', "Perfil")
  }

  actualizarRegistro(event : Event){
    event.preventDefault();

    this.form.patchValue({
      urlImagen : this.imagen.url
    });

    this.crud.onActualizar(this.form.value).subscribe(datos => {
      this.crud.recargar();
    });
  }

  cancelar(){
    if (this.imagen.url != this.previsUrl){
      this.imagen.borrarImagen('persona', this.Nombre?.value);
    }
    this.ruta.navigate(['/tecnologia']);
  }


  get Nombre(){
    return this.form.get('nombre');
  }
  get Apellido(){
    return this.form.get('apellido');
  }
  get Ocupacion(){
    return this.form.get('ocupacion');
  }
  get Email(){
    return this.form.get('email');
  }
  get Telefono(){
    return this.form.get('telefono');
  }
  get Localizacion(){
    return this.form.get('localizacion');
  }
  get Descripcion(){
    return this.form.get('descipcion');
  }


  private previsualizacion (event : any){
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then(( img : any )=>{
      this.previsUrl = img.base;
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
