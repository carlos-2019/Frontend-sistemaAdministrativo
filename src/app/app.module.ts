import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULOS
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundsComponent } from './nopagefounds/nopagefounds.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundsComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
