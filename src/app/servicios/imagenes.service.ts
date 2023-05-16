import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, deleteObject} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

 url : string = "";

  constructor(private storage : Storage) { }


  cargarImagen(event : any, carpeta : string, nombre : any){
    
    const file = event.target.files[0];
    const fileref = ref(this.storage, 'imagenes/'+ carpeta + '/' + nombre);
    uploadBytes(fileref, file)
    .then( response => {
      this.obtenerImagen(carpeta, nombre);
    })
    .catch( e => console.log(e));
  }

  private obtenerImagen(carpeta : string, nombre : string){
    const fileref = ref(this.storage, 'imagenes/' + carpeta + "/" +nombre);
    getDownloadURL(fileref).then(url => {
      this.url = url;
    }).catch((e) => {
      console.log("Error al cargar imagen: " + e);
    });
  }

  borrarImagen(carpeta: string, nombre : string){
    const fileref = ref(this.storage, 'imagenes/' + carpeta + '/' + nombre);
    deleteObject(fileref).then (()=>{
      console.log("SE BORRO CORRECTAMENTE");
    }).catch(e => console.log("ERROR AL BORRAR: " + e));
  }
}
