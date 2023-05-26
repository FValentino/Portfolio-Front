import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDProyectoService } from 'src/app/servicios/crud-proyecto.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit{
  form : FormGroup;
  id : any;
  proyecto : any;
  previsualizacionUrl : any;
  botonActivo : boolean = false;

  constructor(private formBuilder : FormBuilder, private crud : CRUDProyectoService, private ruta : Router,
    private route : ActivatedRoute, private imagen : ImagenesService, private sanitizer : DomSanitizer){
       
      this.id = this.route.snapshot.paramMap.get('id');
      this.crud.onBuscar(this.id).subscribe(dato => {
        this.proyecto = dato;
        this.previsualizacionUrl = this.proyecto.urlImagen;
        console.log("DATOS ENTRADA: ", JSON.stringify(dato) );
      });
    
      this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      nombre : [this.proyecto.nombre, [Validators.required]],
      descripcion: [this.proyecto.descripcion, [Validators.required]],
      urlProyecto: [this.proyecto.urlProyecto, [Validators.required]],
      urlImagen: [this.proyecto.urlImagen]
    });

    console.log("FORMULARIO DE ENTRADA: " + this.form.value);
    
  }

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.imagen.cargarImagen(event, 'proyectos', this.Nombre?.value);
  }

  activarBoton(){
    if (this.Nombre?.value != "" && this.Descripcion?.value != "" && this.UrlProyecto?.value != ""){ 
      this.botonActivo = false; 
    }else{
      this.botonActivo = true;
    }
  }

  onActualizar(event : any){

    let nuevaUrlImagen : any = this.proyecto.urlImagen;

    if (this.imagen.url != this.proyecto.urlImagen){
      nuevaUrlImagen = this.imagen.url;
    }

    this.form.patchValue({
      urlImagen : nuevaUrlImagen
    });

    this.crud.onActualizar(this.id, this.form.value).subscribe(data => {
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
