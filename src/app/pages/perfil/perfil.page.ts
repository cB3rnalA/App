import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  user:any
  constructor(private router:Router, public authService : AuthenticationService) {
    this.user = authService.getProfile()
  }

  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }


  async logout(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/login'])
    })
  }

  obtenerNombreStorage(){
    let nom = this.obtenerCorreoFB();
    console.log(nom);
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
