import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-registrarce',
  templateUrl: './registrarce.page.html',
  styleUrls: ['./registrarce.page.scss'],
})
export class RegistrarcePage implements OnInit {

  persona:Persona={
    nombre:'',
    apellido:'',
    descripcion:'',
  }
  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.persona);
    this.guardar();
  }


  async guardar(){
    await this.storage.set(this.persona.nombre,this.persona);
  }
}
