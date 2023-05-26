import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { DatosPersonalesComponent } from './componentes/formularios/editar/datos-personales/datos-personales.component';
import { AgregarTecnologiaComponent } from './componentes/formularios/agregar/agregar-tecnologia/agregar-tecnologia.component';
import { AgregarEducacionComponent } from './componentes/formularios/agregar/agregar-educacion/agregar-educacion.component';
import { EducacionMenuComponent } from './componentes/menu/educacion-menu/educacion-menu.component';
import { TecnologiaMenuComponent } from './componentes/menu/tecnologia-menu/tecnologia-menu.component';
import { EditarTecnologiaComponent } from './componentes/formularios/editar/editar-tecnologia/editar-tecnologia.component';
import { VistaEducacionComponent } from './componentes/vistas/vista-educacion/vista-educacion.component';
import { EditarEducacionComponent } from './componentes/formularios/editar/editar-educacion/editar-educacion.component';
import { VistaProyectoComponent } from './componentes/vistas/vista-proyecto/vista-proyecto.component';
import { EditarProyectoComponent } from './componentes/formularios/editar/editar-proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './componentes/formularios/agregar/agregar-proyecto/agregar-proyecto.component';
import { ProyectoMenuComponent } from './componentes/menu/proyecto-menu/proyecto-menu.component';

//Formulario
import { ReactiveFormsModule} from '@angular/forms';

//servicios
import { CargarScriptService } from './servicios/cargar-script.service';
import { ExtraerDatosService } from './servicios/extraer-datos.service';
import { InterceptorService } from './servicios/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



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
    TecnologiaMenuComponent,
    EditarTecnologiaComponent,
    EditarEducacionComponent,
    VistaEducacionComponent,
    VistaProyectoComponent,
    EditarProyectoComponent,
    AgregarProyectoComponent,
    ProyectoMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [CargarScriptService, ExtraerDatosService, 
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
