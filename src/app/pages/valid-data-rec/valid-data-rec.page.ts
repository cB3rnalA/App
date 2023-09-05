import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-valid-data-rec',
  templateUrl: './valid-data-rec.page.html',
  styleUrls: ['./valid-data-rec.page.scss'],
})
export class ValidDataRecPage implements OnInit {
  usuario={
    Rut:'',
    Correo:''
  }
  constructor(private router:Router,
    private alertController:AlertController) { }

  ngOnInit() {
  }

  
  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }
    onSubmit(){
      if (this.usuario.Rut=="20942918-7" && this.usuario.Correo=="se.bernal@duocuc.cl"){
        this.router.navigate(['/rec-contra'])
      }
      else{
        
        this.presentAlert()
      }
  
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Información',
        message: "rut y/o Correo incorrectos",
        buttons: ['OK'],
        backdropDismiss:false,
        
      });
  
      await alert.present();
  
  }
}

