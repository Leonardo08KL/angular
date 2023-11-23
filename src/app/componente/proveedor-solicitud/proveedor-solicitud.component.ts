import { Component } from '@angular/core';
import { Proveedor } from 'src/model/Proveedor';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProveedorService } from 'src/app/servieces/proveedor.service';


@Component({
  selector: 'app-proveedor-solicitud',
  templateUrl: './proveedor-solicitud.component.html',
  styleUrls: ['./proveedor-solicitud.component.css']
})
export class ProveedorSolicitudComponent {
  private cargando: boolean = true;
  public proveedor?: Proveedor;

  constructor(
    private solicitudService:ProveedorService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    solicitudService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.proveedor = resp.data as Proveedor;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg+"chale");
          this.cargando = false;
        },
      });
  }
  eliminarSolicitud(pID: number) {
    this.solicitudService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['proveedor']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}
