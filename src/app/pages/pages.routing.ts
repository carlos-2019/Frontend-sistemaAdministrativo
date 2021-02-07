import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { StandComponent } from './stand/stand.component';
import { PagesComponent } from './pages.component';
import { OrdenComponent } from './orden/orden.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent, 
        //RUTAS HIJAS
        children: [
          {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
          {path: 'cliente', component: ClienteComponent, data: {titulo: 'Cliente'}},
          {path: 'producto', component: ProductoComponent, data: {titulo: 'Producto'}},
          {path: 'stand', component: StandComponent, data: {titulo: 'Stand'}},
          {path: 'ordenes', component: OrdenComponent, data: {titulo: 'Ordenes'}},
          {path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil'}}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
