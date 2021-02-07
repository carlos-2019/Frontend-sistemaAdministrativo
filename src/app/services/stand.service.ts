import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stand } from '../models/stand';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  url:string = "http://localhost/Acomerced/backend-acomerced/public/api/stand/";

  constructor(
    private http:HttpClient
  ) { }

  cargarStand(desde: number):Observable<any>{

    const base_url = 'http://localhost/Acomerced/backend-acomerced/public/api';
    const url =  `${base_url}/stand/listar?page=${desde}`;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(url, {headers:headers})
               .pipe(
                 map( (resp: {stand: Stand[]}) => resp.stand)
               );
  }

  cargarStandPorId(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(this.url + 'listarPorId/' + id, {headers:headers})
               .pipe(
                 map( (resp: {stand: Stand[]}) => resp.stand)
               );
  }

  crearStand(stand:Stand):Observable<any>{
    
    let json = JSON.stringify(stand);
    //let params = 'json'+json;
    let params = 'json='+json;
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'crear', params, {headers:headers});
  }

  actualizarStand(id:number, stand:Stand):Observable<any>{
    
    let json = JSON.stringify(stand);
    //let params = 'json'+json;
    let params = 'json='+json;
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    
    return this.http.put(this.url+`update/${id}`, params, {headers:headers});
  }

  eliminarStand(id:number):Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url +`delete/${id}`, {headers:headers});
  }

  buscarStand(buscarStand:string):Observable<any>{
    const base_url = 'http://localhost/Acomerced/backend-acomerced/public/api';
    const url =  `${base_url}/stand?buscarStand=${buscarStand}`;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(url,  {headers:headers});
  }

}
