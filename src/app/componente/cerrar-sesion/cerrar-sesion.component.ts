import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}
  
  onLogout(): void {
      // Manejar aquí lo que sucede después de cerrar sesión, como redirigir al usuario
      this.router.navigate(['login']);
  }
}
