import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CRUDTecnologiaService } from 'src/app/servicios/crud-tecnologia.service';
import { ImagenesService } from 'src/app/servicios/imagenes.service';

@Component({
  selector: 'app-editar-tecnologia',
  templateUrl: './editar-tecnologia.component.html',
  styleUrls: ['./editar-tecnologia.component.css']
})
export class EditarTecnologiaComponent implements OnInit{
  
  private id : any;
  previsualizacionUrl : string = "";
  tecnologia : any;
  datosEnviar : any;
  enviar : boolean = true;
  
  constructor(private crud : CRUDTecnologiaService, private route : ActivatedRoute, 
    private imagen : ImagenesService, private sanitizer : DomSanitizer,private formBuilder : FormBuilder){

  }
  
  form : FormGroup = this.formBuilder.group({});

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.crud.onBuscar(this.id).subscribe(data => {
      this.tecnologia = data;
      this.previsualizacionUrl = this.tecnologia.urlImagen;

      this.form = this.formBuilder.group({
        nombre: [this.tecnologia.nombre,  [Validators.required]],
        urlImage: ['']
      });
    });

  }

  cargarImagen(event : any){
    this.previsualizacion(event);
    this.imagen.cargarImagen (event, 'tecnologias', this.Nombre?.value)
  }

  verificar(){
    if (this.Nombre?.value){
      this.enviar = true;
    }
    else{
      this.enviar = false;
    }
  }
  
  actualizarRegistro(event : Event){
    event.preventDefault();

    this.form.patchValue({
      urlImagen : this.imagen.url
    });

    this.crud.onActualizar(this.id , this.form.value).subscribe();
    console.log("DATOS A ENVIAR: ", this.datosEnviar);
  }

  cancelar(){}


  get Nombre (){
    return this.form.get("nombre");
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
