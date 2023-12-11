import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioUbicacionService } from 'src/app/services/servicio-ubicacion.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Storage } from '@ionic/storage-angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireList,AngularFireObject,AngularFireDatabase } from '@angular/fire/compat/database';
import { UtilsService } from '../../services/utils.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage /*implements OnInit*/ {

  form = new FormGroup({
    asignatura: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required])

  })

  utilSvc = inject(UtilsService);
  constructor(private barcodescanner:BarcodeScanner /*private storage: Storage, public authService : AuthenticationService, private router:Router*/){}
  
  scan(): void {
    this.barcodescanner.scan().then((barcodedata: { text: string }) => {
      console.log("Escaneando...", barcodedata);
  
      try {
        const parsedData: { fecha?: string, hora?: string, asignatura?: string } = JSON.parse(barcodedata.text);
  
        if (parsedData.fecha && parsedData.hora && parsedData.asignatura) {
          console.log("Fecha:", parsedData.fecha);
          console.log("Hora:", parsedData.hora);
          console.log("Asignatura:", parsedData.asignatura);
  
          // Puedes asignar estos valores a las propiedades de tu componente si es necesario
          this.form.value.fecha = parsedData.fecha;
          this.form.value.hora = parsedData.hora;
          this.form.value.asignatura = parsedData.asignatura;
          // Asigna valores al formulario
          this.form.setValue({
            fecha: parsedData.fecha,
            hora: parsedData.hora,
            asignatura: parsedData.asignatura
          });

          this.submit();
        } else {
          console.log("Formato de código QR inválido");
        }
      } catch (error) {
        console.log("Error al analizar los datos del código QR", error);
      }
    }).catch((err: Error) => {
      console.log("ERROR AL ESCANEAR!!!!", err);
    });
  }
  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)

  user = {} as User;

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
  }

  async submit(){
    if (this.form.valid) {

      let path = `users/${this.user.uid}/asignaturas`


      
      this.firebaseSvc.addDocument(path,this.form.value as User).then(async res =>{
        
        this.utilsSvc.modalCtrl.dismiss({ success: true });
        
        this.utilsSvc.presentToast({
          message: "agregada la asistencia",
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon:'alert-circle-outline'
        })

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
}



  /*
  async scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("escaneando ...",barcodedata);
      this.texto=(JSON.stringify(barcodedata));
    }).catch(err=>{
      console.log("Error al escanear"); 
    })
  }

  async obtenerCorreo(){
    try {
      const profile = await this.authService.getProfile();
      const correo = profile.email;
      console.log('Correo obtenido:', correo);
      return correo;
    }catch(error) {
      console.error('Error al obtener el perfil:', error);
      throw error;
    }
  }

  ngOnInit() {
  }
*/

  /* 
  categorias:Categoria[]=[];

  constructor(private alertController: AlertController,private router:Router, private servicioubicacion:ServicioUbicacionService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro de clase',
      message: 'El registro de clase fue excitoso',
      buttons: [
        {
          text:'ok'
        }
      ],
    });

    await alert.present();
    this.router.navigate(['home']);
  }*/