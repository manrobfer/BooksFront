import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/app.categorias';
import { AutoresComponent } from './autores/autores.component';
import { AppRouterModule } from './app-router.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperiorComponent } from 'src/superior/superior.component';
import { InferiorComponent } from 'src/superior/Inferior/inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    AutoresComponent,
    DashboardComponent,
    SuperiorComponent,
    InferiorComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
