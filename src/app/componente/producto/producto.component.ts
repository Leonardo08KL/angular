import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/model/Producto';
import { ProductoService } from 'src/app/servieces/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
public listaProductos: Producto[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private productoServicio: ProductoService,
    private router: Router
  ) {
    productoServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaProductos = Producto.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-producto/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-producto/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.productoServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.productoServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaProductos = Producto.mapParseListJson(resp.data);
            },
            error: (err) => {
              console.log(err.error.msg);
            },
          });
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }
}
