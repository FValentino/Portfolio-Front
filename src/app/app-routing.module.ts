import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/formularios/iniciar-sesion/iniciar-sesion.component';
import { DatosPersonalesComponent } from './componentes/formularios/datos-personales/datos-personales.component';
import { AgregarTecnologiaComponent } from './componentes/formularios/agregar-tecnologia/agregar-tecnologia.component';
import { AgregarEducacionComponent } from './componentes/formularios/agregar-educacion/agregar-educacion.component';
import { EducacionMenuComponent } from './componentes/menu/educacion-menu/educacion-menu.component';
import { TecnologiaMenuComponent } from './componentes/menu/tecnologia-menu/tecnologia-menu.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'datos-personales', component:DatosPersonalesComponent},
  {path:'agregar-tecnologia', component: AgregarTecnologiaComponent},
  {path:'agregar-educacion', component: AgregarEducacionComponent},
  {path:'educacion', component: EducacionMenuComponent},
  {path:'tecnologia', component: TecnologiaMenuComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
