import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "http://localhost/Acomerced/backend-acomerced/public/api/producto/";

  constructor(
    private http:HttpClient
  ) { }

  getProductos():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(this.url + 'listar', {headers:headers});
  }

  getProductoById(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(this.url + 'listarPorId/' + id, {headers:headers});
  }

  crearProducto(producto):Observable<any>{
    
    let json = JSON.stringify(producto);
    //let params = 'json'+json;
    let params = 'json='+json;
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post(this.url+'crear', params, {headers:headers});
  }

  updateProducto(producto, id):Observable<any>{
    let json = JSON.stringify(producto);
    //let params = 'json'+json;
    let params = 'json='+json;
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-url-urlencoded');
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.put(this.url+'update/' + id, params, {headers:headers});
  }

  delete(id){
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.put(this.url+'delete/' + id, {headers:headers});
  }

  buscar(buscarProducto:string){

    const base_url = 'http://localhost/Acomerced/backend-acomerced/public/api';
    const url =  `${base_url}/producto?buscarProducto=${buscarProducto}`;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.get(url,  {headers:headers});
  }
}
