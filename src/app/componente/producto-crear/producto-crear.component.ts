import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductoService } from 'src/app/servieces/producto.service';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent {
  producto!: Producto;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private solicitudService: ProductoService,
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
            this.producto = resp.data as Producto;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.producto = new Producto(-1, '', '', 0.0, 0);
    }
  }
  submit() {
    //servidor.crearSolicitud(this.solicitud);
    //this.producto.ProductoID = 1;
    if (this.producto.ProductoID < 0) {
      this.solicitudService.create(this.producto).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Solicitud Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.solicitudService
        .update(this.producto.ProductoID, this.producto)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Solicitud Actualizada';
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