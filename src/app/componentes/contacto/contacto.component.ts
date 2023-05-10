import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ExtraerDatosService } from 'src/app/servicios/extraer-datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  form: FormGroup;  
  contacto : any;

  constructor(private datos: ExtraerDatosService, private formBuilder: FormBuilder, private http: HttpClient) {
    
    this.form= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      nombre:['',[Validators.required, Validators.maxLength(50)]],
      asunto:['',[Validators.required, Validators.maxLength(255)]],
      mensaje:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.datos.obtenerDatosPersona().subscribe(dato => {
      this.contacto = dato;
    });
  }
}
