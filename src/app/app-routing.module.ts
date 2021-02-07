import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// MODULE
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundsComponent } from './nopagefounds/nopagefounds.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
