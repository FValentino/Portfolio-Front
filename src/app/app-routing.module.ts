import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/formularios/iniciar-sesion/iniciar-sesion.component';
import { DatosPersonalesComponent } from './componentes/formularios/editar/datos-personales/datos-personales.component';
import { AgregarTecnologiaComponent } from './componentes/formularios/agregar/agregar-tecnologia/agregar-tecnologia.component';
import { AgregarEducacionComponent } from './componentes/formularios/agregar/agregar-educacion/agregar-educacion.component';
import { EducacionMenuComponent } from './componentes/menu/educacion-menu/educacion-menu.component';
import { TecnologiaMenuComponent } from './componentes/menu/tecnologia-menu/tecnologia-menu.component';
import { EditarTecnologiaComponent } from './componentes/formularios/editar/editar-tecnologia/editar-tecnologia.component';
import { EditarEducacionComponent } from './componentes/formularios/editar/editar-educacion/editar-educacion.component';
import { VistaEducacionComponent } from './componentes/vistas/vista-educacion/vista-educacion.component';
import { VistaProyectoComponent } from './componentes/vistas/vista-proyecto/vista-proyecto.component';
import { ProyectoMenuComponent } from './componentes/menu/proyecto-menu/proyecto-menu.component';
import { AgregarProyectoComponent } from './componentes/formularios/agregar/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './componentes/formularios/editar/editar-proyecto/editar-proyecto.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'datos-personales', component:DatosPersonalesComponent},
  {path:'educacion/:id', component: VistaEducacionComponent},
  {path:'educacion', component: EducacionMenuComponent},
  {path:'agregar-educacion', component: AgregarEducacionComponent},
  {path:'editar-educacion/:id', component: EditarEducacionComponent},
  {path:'tecnologia', component: TecnologiaMenuComponent},
  {path:'agregar-tecnologia', component: AgregarTecnologiaComponent},
  {path:'editar-tecnologia/:id', component: EditarTecnologiaComponent},
  {path:'proyecto/:id', component: VistaProyectoComponent},
  {path:'proyecto', component: ProyectoMenuComponent},
  {path:'agregar-proyecto', component: AgregarProyectoComponent},
  {path:'editar-proyecto/:id', component: EditarProyectoComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
