import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StandComponent } from './stand/stand.component';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { OrdenComponent } from './orden/orden.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ProductoComponent,
    DashboardComponent,
    StandComponent,
    PagesComponent,
    OrdenComponent,
    PerfilComponent
  ],
  exports: [
    ClienteComponent,
    ProductoComponent,
    DashboardComponent,
    StandComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
