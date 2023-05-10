import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/formularios/iniciar-sesion/iniciar-sesion.component';
import { DatosPersonalesComponent } from './componentes/formularios/datos-personales/datos-personales.component';
import { AgregarTecnologiaComponent } from './componentes/formularios/agregar-tecnologia/agregar-tecnologia.component';
import { AgregarEducacionComponent } from './componentes/formularios/agregar-educacion/agregar-educacion.component';
import { EducacionMenuComponent } from './componentes/menu/educacion-menu/educacion-menu.component';
import { TecnologiaMenuComponent } from './componentes/menu/tecnologia-menu/tecnologia-menu.component';

//Formulario
import { ReactiveFormsModule} from '@angular/forms';

//servicios
import { CargarScriptService } from './servicios/cargar-script.service';
import { ExtraerDatosService } from './servicios/extraer-datos.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    TecnologiasComponent,
    ProyectosComponent,
    ContactoComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    ContactoComponent,
    EducacionComponent,
    DatosPersonalesComponent,
    AgregarTecnologiaComponent,
    AgregarEducacionComponent,
    EducacionMenuComponent,
    TecnologiaMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CargarScriptService, ExtraerDatosService, 
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
