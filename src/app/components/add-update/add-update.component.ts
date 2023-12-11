import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss'],
})
export class AddUpdateComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    date: new FormControl(''),

  })

  firebaseSvc = inject(AuthenticationService);
  utilsSvc = inject(UtilsService)

  user = {} as User;

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
  }

  async submit(){
    if (this.form.valid) {

      let path = `users/${this.user.uid}/asignaturas`


      delete this.form.value.id
      
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
