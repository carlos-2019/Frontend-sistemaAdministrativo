import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [AuthServiceService]
})
export class PerfilComponent implements OnInit {

  identidad;
  
  constructor(
    public authService:AuthServiceService
  ) { 
    this.identidad = this.authService.getIdentidad();
  }

  ngOnInit(): void {
  }

}
