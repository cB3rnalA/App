import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-rec-contra',
  templateUrl: './rec-contra.page.html',
  styleUrls: ['./rec-contra.page.scss'],
})
export class RecContraPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res =>{
        this.utilsSvc.presentToast({
          message: 'Correo enviado con exito',
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon:'mail-outline'
        })
        this.utilsSvc.routerLink('/login');
        this.form.reset();

      }).catch(error => {
        console.log(error)

        this.utilsSvc.presentToast({
          message: "correo invalido",
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

  constructor(private router:Router) { }

  navegar(ruta:String){
    console.log("antes");
    this.router.navigate(['/'+ruta]);
    console.log("funciona");
  }

}

