import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/login';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService]
})
export class LoginComponent implements OnInit {

  year = new Date().getFullYear();
  public cliente:Cliente;
  public status:string;
  public token;
  public identidad;

  constructor(
    private authService:AuthServiceService,
    private router: Router
  ) { 
    this.cliente = new Cliente('','','','','','','');
  }

  ngOnInit(): void {
  }

  onLogin(form){
    this.authService.signup(this.cliente).subscribe(
      response => {
        //TOKEN
        if (response.status != 'error') {
            this.status = 'success';
            this.token = response;

            // OBJETO USUARIO IDENTIFICADO
            this.authService.signup(this.cliente, true).subscribe(
              response => {
                    this.identidad = response;
                    // GUARDAR DATOS EN EL LOCALSTORAGE
                    console.log(this.token);
                    console.log(this.identidad);
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('identidad', JSON.stringify(this.identidad));
                    this.router.navigateByUrl('/');
              },
              error => {
                this.status = 'error';
                console.log(<any>error);
              }
            );

        }else{
            this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

}
