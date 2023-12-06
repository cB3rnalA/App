import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
  nombre:'',
  contrasena:''
}

  
  loginForm = new FormGroup({
  correo : new FormControl('', [ Validators.required, Validators.email]),
  contrasena : new FormControl('', [ Validators.required])
})
  firebaseScv = inject(AuthenticationService)

  constructor(private router:Router,
    private alertController:AlertController , private storage: Storage, public formBuilder:FormBuilder, public  loadingCtrl: LoadingController, public authService : AuthenticationService) { }
  
    

  ngOnInit() {}

  get errorControl(){
    return this.loginForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.correo,this.loginForm.value.contrasena).catch((error)=>{
        console.log(error);
        console.log(this.loginForm.value.contrasena);
        loading.dismiss()
      })

      if(user){
        this.activar(1);
        loading.dismiss()
        console.log("hacia home")
        this.router.navigate(['/home'])
      } else {
        console.log(this.loginForm.value.contrasena);
        console.log('providew correct values')
        this.presentAlert();
        this.activar(0);
      }
    }
    else{
      loading.dismiss();
      this.presentAlert();
    }
  }
  
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

  /*
  onSubmit() {
    if (this.usuario.nombre == "correo" && this.usuario.contrasena == "1234") {
      console.log('alumno');
      this.activar(1);
      this.router.navigate(['/home'])
    }
    else if (this.usuario.nombre == "profe" && this.usuario.contrasena == "4321") {
      console.log('profesor');
      this.activar(2);
      this.router.navigate(['/profe'])
    }else {
      this.presentAlert()
      console.log("No autorizado");
      this.activar(0);
    }
  }
*/

  async activar(valor: Number) {
    await this.storage.set("sesion", valor);//set para guardar
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Usuario y/o password incorrectos",
      buttons: ['OK'],
      backdropDismiss: false,
    });
    await alert.present();
  }

}
