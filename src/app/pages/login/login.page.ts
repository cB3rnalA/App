import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup

  usuario={
  nombre:'',
  contrasena:''
}

  constructor(private router:Router,
    private alertController:AlertController , public formBuilder:FormBuilder, public  loadingCtrl: LoadingController, public authService : AuthenticationService) { }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      contrasena :['', [
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
    })
  }
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
        loading.dismiss()
        this.router.navigate(['/home'])
      } else {
        console.log(this.loginForm.value.contrasena);
        console.log('providew correct values')
      }
    }
  }
  
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

  onSubmit(){
    if (this.usuario.nombre=="correo" && this.usuario.contrasena=="1234"){
      this.router.navigate(['/home'])
    }
    else{
      
      this.presentAlert()
    }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Usuario y/o password incorrectos",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
}
