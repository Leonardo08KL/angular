import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componente/home/home.component';
import { SolicitudesComponent } from './componente/solicitudes/solicitudes.component';
import { CrearSolicitudesComponent } from './componente/crear-solicitudes/crear-solicitudes.component';
import { ListaSolicitudesComponent } from './componente/lista-solicitudes/lista-solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CerrarSesionComponent } from './componente/cerrar-sesion/cerrar-sesion.component';
import { CambiarPasswordComponent } from './componente/cambiar-password/cambiar-password.component';
import { EmpleadoComponent } from './componente/empleado/empleado.component';
import { ProductoComponent } from './componente/producto/producto.component';
import { ProveedorComponent } from './componente/proveedor/proveedor.component';
import { VentaComponent } from './componente/venta/venta.component';
import { VentaDetalleComponent } from './componente/venta-detalle/venta-detalle.component';
import { EmpleadoCrearComponent } from './componente/empleado-crear/empleado-crear.component';
import { EmpleadoSolicitudComponent } from './componente/empleado-solicitud/empleado-solicitud.component';
import { ProductoCrearComponent } from './componente/producto-crear/producto-crear.component';
import { VentaCrearComponent } from './componente/venta-crear/venta-crear.component';
import { VentaSolicitudComponent } from './componente/venta-solicitud/venta-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitudesComponent,
    CrearSolicitudesComponent,
    ListaSolicitudesComponent,
    LoginComponent,
    CerrarSesionComponent,
    CambiarPasswordComponent,
    EmpleadoComponent,
    ProductoComponent,
    ProveedorComponent,
    VentaComponent,
    VentaDetalleComponent,
    EmpleadoCrearComponent,
    EmpleadoSolicitudComponent,
    ProductoCrearComponent,
    VentaCrearComponent,
    VentaSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
