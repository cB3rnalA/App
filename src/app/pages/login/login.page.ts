import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
usuario={
  username:'',
  password:''
}

  constructor(private router:Router,
    private alertController:AlertController) { }
  
  ngOnInit() {
  }
  
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

  onSubmit(){
    if (this.usuario.username=="correo" && this.usuario.password=="1234"){
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
