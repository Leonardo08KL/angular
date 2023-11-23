import { Routes } from '@angular/router';
import { CrearSolicitudesComponent } from 'src/app/componente/crear-solicitudes/crear-solicitudes.component';
import { HomeComponent } from 'src/app/componente/home/home.component';
import { ListaSolicitudesComponent } from 'src/app/componente/lista-solicitudes/lista-solicitudes.component';
import { SolicitudesComponent } from 'src/app/componente/solicitudes/solicitudes.component';
import { authGuardGuard } from 'src/app/guards/auth-guard.guard';
import { LoginComponent } from 'src/app/login/login.component';
import { CerrarSesionComponent } from 'src/app/componente/cerrar-sesion/cerrar-sesion.component';
import { EmpleadoComponent } from 'src/app/componente/empleado/empleado.component';
import { ProductoComponent } from 'src/app/componente/producto/producto.component';
import { ProveedorComponent } from 'src/app/componente/proveedor/proveedor.component';
import { VentaComponent } from 'src/app/componente/venta/venta.component';
import { VentaDetalleComponent } from 'src/app/componente/venta-detalle/venta-detalle.component';
import { EmpleadoSolicitudComponent } from 'src/app/componente/empleado-solicitud/empleado-solicitud.component';
import { EmpleadoCrearComponent } from 'src/app/componente/empleado-crear/empleado-crear.component';
import { VentaCrearComponent } from 'src/app/componente/venta-crear/venta-crear.component';
import { VentaSolicitudComponent } from 'src/app/componente/venta-solicitud/venta-solicitud.component';
import { ProveedorCrearComponent } from 'src/app/componente/proveedor-crear/proveedor-crear.component';
import { ProveedorSolicitudComponent } from 'src/app/componente/proveedor-solicitud/proveedor-solicitud.component';

export class ItemMenu {
  public id!: number;
  public name!: string;
  public href!: string;
  constructor(id: number, name: string, href: string) {
    this.id = id;
    this.name = name;
    this.href = href;
  }
}
export namespace env {
  export const menu: Array<ItemMenu> = [
    new ItemMenu(1, 'Inicio', '/'),
    // new ItemMenu(2, 'Lista Solicitudes', 'lista-solicitudes'),
    // new ItemMenu(3, 'Crear Solicitudes', 'crear-solicitudes'),
    // new ItemMenu(4, 'Cerrar sesion', 'cerrar-sesion')
    new ItemMenu(2, 'Empleado', 'empleado'),
    new ItemMenu(3, 'Producto', 'producto'),
    new ItemMenu(4, 'Proveedor', 'proveedor'),
    new ItemMenu(5, 'Venta', 'venta'),
    new ItemMenu(6, 'Venta Detalle', 'venta-detalle'),
  ];
  export const routers: Routes = [
    { path: '', component: HomeComponent ,canActivate:[authGuardGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'lista-solicitudes', component: ListaSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'crear-solicitudes', component: CrearSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'editar-solicitud/:id', component: CrearSolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'ver-solicitudes/:id', component: SolicitudesComponent ,canActivate:[authGuardGuard]},
    { path: 'cerrar-sesion', component: LoginComponent },

    // Empleado
    { path: 'empleado', component: EmpleadoComponent, canActivate:[authGuardGuard]},
    { path: 'crear-empleado', component: EmpleadoCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'editar-empleado/:id', component: EmpleadoCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'ver-empleado/:id', component: EmpleadoSolicitudComponent,canActivate:[authGuardGuard]},

    // Venta
    { path: 'venta', component: VentaComponent, canActivate:[authGuardGuard]},
    { path: 'crear-venta', component: VentaCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'editar-venta/:id', component: VentaCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'ver-venta/:id', component: VentaSolicitudComponent,canActivate:[authGuardGuard]},

    //proveedor
    { path: 'proveedor', component: ProveedorComponent, canActivate:[authGuardGuard]},
    { path: 'crear-proveedor', component: ProveedorCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'editar-proveedor/:id', component: ProveedorCrearComponent ,canActivate:[authGuardGuard]},
    { path: 'ver-proveedor/:id', component: ProveedorSolicitudComponent,canActivate:[authGuardGuard]},



    { path: 'producto', component: ProductoComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: 'venta', component: VentaComponent },
    { path: 'venta-detalle', component: VentaDetalleComponent}
  ];
}
