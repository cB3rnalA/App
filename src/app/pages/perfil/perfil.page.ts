import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  user:any;
  correo: any;
  
  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router:Router, public authService : AuthenticationService) {
    this.user = authService.getProfile()
    this.correo = this.obtenerCorreoFB()
  }

  getUserInfo(uid: string){
    if (this.form.valid) {
      
      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then((user: User) =>{

        this.utilsSvc.saveInLocalStorage('user', user)
        this.utilsSvc.routerLink('/home')
        this.form.reset();

        this.utilsSvc.presentToast({
          message: `Te damos la bienvenida ${user.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon:'person-circle-outline'
        })
        return user.name;

      }).catch(error => {
        console.log(error)

        this.utilsSvc.presentToast({
          message: "correo o cantraseña invalidos",
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon:'alert-circle-outline'
        })
      }).finally(() => {
      })
    }
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
