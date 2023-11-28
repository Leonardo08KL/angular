import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/model/Proveedor';
import { ProveedorService } from 'src/app/servieces/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  public listaProveedor: Proveedor[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() {}
  constructor(
    private proveedorServicio: ProveedorService,
    private router: Router
  ) {
    proveedorServicio.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaProveedor = Proveedor.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-proveedor/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-proveedor/' + pID);
  }
  deleteSolicitud(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.proveedorServicio.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.proveedorServicio.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaProveedor = Proveedor.mapParseListJson(resp.data);
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
