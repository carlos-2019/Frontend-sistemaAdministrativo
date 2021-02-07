import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { StandService } from '../../services/stand.service'
import { Stand } from '../../models/stand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.css'],
  providers: [StandService]
})
export class StandComponent implements OnInit {

  public standForm: FormGroup;
  public standTemporal;
  public stands:Stand[] = [];
  public desde: number = 0;
  public numeroPagina:number = 0;
  

  constructor(
    private _StandService: StandService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.standForm = this.fb.group({
      nomb_stand: ['', Validators.required],
      nume_stand: ['', Validators.required],
      celu_stand: [''],
      tele_stand: [''],
      mail_stand: ['', Validators.required]
    });
    this.cargarStand();
  }

  cargarStand(){
    this._StandService.cargarStand(this.desde)
        .subscribe( ({last_page, data}) => {
          this.stands = data;
          this.numeroPagina = last_page;
        });
  }

  cambiarPagina(valor: number){
    this.desde += valor;
    if ( this.desde < 0 ) {
      this.desde = 0;
      // mas 1 porque detecta el 0 y 1 como si fueran uno mismo
    } else if ( this.desde >= this.numeroPagina + 1 ) {
      this.desde -= valor; 
    }
    this.cargarStand();
  }

  // cargamos los datos al formulario
  cargarStandPorId(id){
    this._StandService.cargarStandPorId(id)
        .subscribe(stand => {
          this.standTemporal = stand;
          // desglosamos los datos que nos viene de la respuesta
          const {nomb_stand, nume_stand, celu_stand, tele_stand, mail_stand} = stand;
          this.standForm.setValue({nomb_stand, nume_stand, celu_stand, tele_stand, mail_stand});
        });
  }

  guardarStand(){
      const { nomb_stand } = this.standForm.value;
      this._StandService.crearStand(this.standForm.value)
          .subscribe( resp => {
            Swal.fire('Creado', `stand ${nomb_stand} creado correctamente`, 'success');
            this.cargarStand();
          });
    
  }

  actualizarStand(){
    const {id} =  this.standTemporal;
    const { nomb_stand } = this.standForm.value;
    this._StandService.actualizarStand(id,this.standForm.value)
        .subscribe(resp => {
          Swal.fire('Actualizado', `stand ${nomb_stand} Actualizado correctamente`, 'success');
          this.close();
          this.cargarStand();
        });
  }

  eliminarStand(id){
    Swal.fire({
      title: '¿Desea borrar el Stand?',icon: 'warning',showCancelButton: true,confirmButtonText: 'Si, borrarlo', iconColor: 'orange',
              confirmButtonColor:'red', cancelButtonColor: '#51D1F6'
    }).then((result) => {
      if (result.value) {
        this._StandService.eliminarStand( id )
          .subscribe( resp => {            
            this.cargarStand();
            Swal.fire('Stand borrado', 'fue eliminado correctamente', 'success');            
          });

      }
    });
  }

  buscarStand(termino:string){
    if (termino.length === 0) {
      return this.cargarStand();
    }
    this._StandService.buscarStand(termino)
        .subscribe( resp => {
          this.stands = resp;
          console.log(resp);
        });
  }

  close(){
    console.log('cerrar');
   }
}
