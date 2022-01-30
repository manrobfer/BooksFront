import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { CategoriasComponent } from "./categorias/app.categorias";
import { AutoresComponent } from './autores/autores.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const rotas: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  {path: 'categorias', component: CategoriasComponent},
  {path: 'autores', component: AutoresComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(rotas)],
  exports: [ RouterModule]
})
export class AppRouterModule { }
