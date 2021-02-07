import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  providers: [AuthServiceService]
})
export class TopnavComponent implements OnInit {

  identidad;

  constructor(
    public authService:AuthServiceService
  ) { 
    this.identidad = this.authService.getIdentidad();
  }

  ngOnInit(): void {
  }

}
