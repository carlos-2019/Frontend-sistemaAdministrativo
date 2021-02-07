import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  public producto:Producto;
  public productos;
  public status;
  
  constructor(
    private _productoService: ProductoService,
    private router: Router
  ) { 
    this.producto = new Producto(null,0,null,'','',null,null,'','0','',0);
  }
  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos()
        .subscribe( resp =>{
          this.productos = resp.productos
        });
  }

  getProductoById(id){
    this._productoService.getProductoById(id)
        .subscribe( resp => {
          this.producto = resp.productos
        });
  }

  onRegisterProducto(form){
    this._productoService.crearProducto(this.producto)
      .subscribe( resp =>{
        this.getProductos();
        Swal.fire({position: 'top-end', icon:this.status, title: 'Producto Resgistrado Exitosamente', showConfirmButton: false,timer: 1000});
        form.reset();
      });
  }

  onUpdateProducto(form){
    this._productoService.updateProducto(this.producto, this.producto.id)
        .subscribe(
          resp => {
          this.status = resp.status;
          Swal.fire({
            position: 'top-end',
            icon:   this.status,
            title: 'Producto Actualizado Exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.getProductos();
      });
  }

  deleteProducto(id){
    this._productoService.delete(id)
        .subscribe( resp =>{
          this.getProductos();
          Swal.fire('Borrado','Producto Eliminado Correctamente','success');
        });
  }

  detalleProduco(id){
    this._productoService.getProductoById(id)
        .subscribe( resp =>{
          console.log(resp.productos);
          Swal.fire({
            title: 'Detalle',
            icon: 'info',
            html:
              '<b>Nombre</b>: ' + resp.productos.nomb_prod +'</br>'+
              '<b>Categoria</b>: ' + resp.productos.categorias.nomb_categ  +'</br>'+
              '<b>Stand</b>: ' + resp.productos.stand.nomb_stand  +'</br>'+
              '<b>Descripcion</b>: ' + resp.productos.desc_prod +'</br>'+
              '<b>Stock</b>: ' + resp.productos.stock_prod +'</br>'+
              '<b>Precio Unitario</b>: ' + resp.productos.puni_prod +'</br>'+
              '<b>Color</b>: ' + resp.productos.color +'</br>'+
              '<b>Talla</b>: ' + resp.productos.talla +'</br>'+
              '<b>Material</b>: ' + resp.productos.material +'</br>'+
              '<b>Descuento</b>: ' + resp.productos.descu_prod +'</br>'+
              '<b>Estado</b>: ' + resp.productos.esta_prod +'</br>',
            showCloseButton: true
          });
        });
  }

  buscar( termino:string ){
    if (termino.length === 0) {
      return this.getProductos();
    }
    this._productoService.buscar(termino)
        .subscribe( resp => {
          this.productos = resp;
        });
  }
}
