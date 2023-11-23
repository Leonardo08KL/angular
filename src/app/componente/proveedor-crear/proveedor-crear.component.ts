import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/servieces/proveedor.service';
import { Proveedor } from 'src/model/Proveedor';

@Component({
  selector: 'app-proveedor-crear',
  templateUrl: './proveedor-crear.component.html',
  styleUrls: ['./proveedor-crear.component.css']
})
export class ProveedorCrearComponent {
  

  proveedor!: Proveedor;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private solicitudService: ProveedorService,
    private activaRouter: ActivatedRoute
  ) {
    //tener el id parametro
    //en caso que sea null
    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      solicitudService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.proveedor = resp.data as Proveedor;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.proveedor = new Proveedor(-1, '', '', '','');
    }
  }
  soloNumeros(event: any): void {
    const pattern = /[0-9]/;

    if (!pattern.test(event.key)) {
      // Si el carácter ingresado no es un número, evita que se agregue al valor del campo
      event.preventDefault();
    }
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    //this.venta.VentaID = 1;
    if (this.proveedor.ProveedorID < 0) {
      this.solicitudService.create(this.proveedor).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Proveedor Agregado';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = 'Error al agregar Proveedor';
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.solicitudService
        .update(this.proveedor.ProveedorID, this.proveedor)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Proveedor Actualizado';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
    //modificar para que si tiene definido id elemento solicitud se actualice si no
    //se crea nuevo
  }
}