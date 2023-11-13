import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {
  user: any
  constructor(private router: Router, public authService: AuthenticationService) {
    this.user = authService.getProfile()
  }

  ngOnInit() {
  }

  navegar(ruta: String) {
    this.router.navigate(['/' + ruta]);
  }

  async logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }
}
