import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url:string = "http://localhost/Acomerced/backend-acomerced/public/api/";
  identidad;
  token;

  constructor(private http:HttpClient) { 
    
  }

  signup(cliente, gettoken = null): Observable<any>{
    if(gettoken != null){
      cliente.gettoken = 'true';
    }
    let json = JSON.stringify(cliente);
    //let params = 'json'+json;
    let params = 'json='+json;
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'login', params, {headers:headers});
    
  }

  getIdentidad(){
    let identidad = JSON.parse(localStorage.getItem('identidad'));
    if (identidad && identidad != "undefined") {
        this.identidad = identidad;
    }else{
        this.identidad = null;
    }
    return this.identidad;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if (token && token != "undefined") {
        this.token = token;
    }else{
        this.token = null;
    }
    return this.token;
  }
}
