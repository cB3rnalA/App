import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarce',
  templateUrl: './registrarce.page.html',
  styleUrls: ['./registrarce.page.scss'],
})
export class RegistrarcePage implements OnInit {
  regForm : FormGroup;

  dato: any;

  user:User={
    uid:'',
    nombre:'',
    correo:'',
    contrasena:'',
  }

  constructor(private storage: Storage, public formBuilder:FormBuilder, public  loadingCtrl: LoadingController, public authService : AuthenticationService,public router : Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
        nombre :['',[Validators.required]],
        correo :['', [
          Validators.required,
          Validators.email,
          Validators.pattern(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/)]],
        contrasena :['', [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])/),
          Validators.minLength(8)]]
      })
    }
  
  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.correo,this.regForm.value.contrasena).catch((error)=>{
        console.log(error);
        console.log(this.regForm.value.contrasena);
        loading.dismiss()
      })

      if(user){
        loading.dismiss()
        this.authService.updateUser(this.regForm.value.nombre);
        this.wa();
        const nom = (await this.authService.getProfile()).displayName
        console.log(nom)
        this.router.navigate(['/home'])
      } else {
        console.log(this.regForm.value.contrasena);
        console.log('providew correct values')
      }
    }
  }

  onSubmit(){
    console.log(this.user);
    this.guardar();
  }

  wa(){
    console.log("guardando")
    this.guardar();
    console.log("guardao")
  }

  async guardar(){
    await this.storage.set(this.regForm.value.nombre,this.regForm.value.user);
    this.authService.enviarDatos(this.regForm);
  }

}
