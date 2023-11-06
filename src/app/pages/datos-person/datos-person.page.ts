import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-person',
  templateUrl: './datos-person.page.html',
  styleUrls: ['./datos-person.page.scss'],
})
export class DatosPersonPage  {
  user:any
  constructor(private router:Router) {}

  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

}
