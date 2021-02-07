import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = "http://localhost/Acomerced/backend-acomerced/public/api/cliente/";

  constructor(
    private http:HttpClient
  ) { }

  getClientes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(this.url + 'listar', {headers:headers});
  }
}
