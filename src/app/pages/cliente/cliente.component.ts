import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  public clientes;

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes(){
    this._clienteService.getClientes().subscribe(
      response => {
        if (response.status == 'success') {
            this.clientes = response.clientes;
            console.log(this.clientes);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
