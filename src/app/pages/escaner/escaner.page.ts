import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioUbicacionService } from 'src/app/services/servicio-ubicacion.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireList,AngularFireObject,AngularFireDatabase } from '@angular/fire/compat/database';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateComponent } from 'src/app/components/add-update/add-update.component';
import { User } from 'firebase/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
  texto : string=''
  
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    date: new FormControl(''),

  })
  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)
  constructor(private barcodescanner:BarcodeScanner /*private storage: Storage, public authService : AuthenticationService, private router:Router*/){}
  
  user = {} as User;

  ngOnInit() {
    this.user =this.utilsSvc.getFromLocalStorage('user');
  }

  async submit(){
    if (this.form.valid) {
      let path = `users/${this.user.uid}/asignaturas`

      const loading = await this.utilsSvc.loading();
      await loading.present();

      delete this.form.value.id;

      this.firebaseSvc.addDocument(path,this.form.value as User).then(async res =>{

        this.utilsSvc.dismissModal({ success: true });

        this.utilsSvc.presentToast({
          message: "Asignatura guardada correctamente",
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon:'alert-circle-outline'
        })

      }).catch(error => {
        console.log(error)

        this.utilsSvc.presentToast({
          message: "No se a guardado la asignatura",
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon:'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
  }
  
  //====== agregar asistencia ======
  addAsig(){
    this.utilsSvc.presentModal({
      component: AddUpdateComponent,
      
    })
  }


  scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("Scaneando...", barcodedata);
      this.texto=(JSON.stringify(barcodedata));
    }).catch(err=>{
      console.log("ERROR AL ESCANEAR!!!!");
    })

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
  }

  ngOnInit() {
    this.servicioubicacion.getCategorias().subscribe(datos=>{
      //console.log(datos.categories);
      this.categorias.push(...datos.categories);
      console.log(this.categorias);
    
    });
  } */


