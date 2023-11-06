import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private alertController: AlertController, private storage: Storage) { }

  ngOnInit() {}

  navegar(ruta: String) {
    this.router.navigate(['/' + ruta]);
  }

  onSubmit() {
    if (this.usuario.username == "correo" && this.usuario.password == "1234") {
      console.log('alumno');
      this.activar(1);
      //console.log("Listo!!!!");
      let ext: NavigationExtras = {
        state: {
          saludo: "Hola mundo!!!",
        }
      }
      this.router.navigate(['/home'], ext)
      //console.log(ext)
    }

    else if (this.usuario.username == "profe" && this.usuario.password == "4321") {
      console.log('profesor');
      this.activar(1);
      this.router.navigate(['/profe'])
    }
    else {
      this.presentAlert()
      console.log("No autorizado");
      this.activar(0);
      this.router.navigate(['/login']);
    }
  }

  async activar(valor: Number) {
    await this.storage.set("sesion", valor);
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
