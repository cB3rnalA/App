import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  user:any;
  correo: any;
  constructor(private router:Router, public authService : AuthenticationService) {
    this.user = authService.getProfile()
    this.correo = this.obtenerCorreoFB()
  }

  ngOnInit() {
    this.obtenerCorreoFB();
    console.log(this.correo);
  }

  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }


  async logout(){
    this.authService.signOut()
  }


  obtenerNombreStorage(){
    let corre = this.obtenerCorreoFB();
    console.log(corre);
  }

  async obtenerCorreoFB(){
    try {
      const profile = await this.authService.getProfile();
      const correo = profile.email;
      console.log('correo obtenido:', correo);
      return correo;
    }catch(error) {
      console.error('Error al obtener el perfil:', error);
      throw error;
    }
  }
}
