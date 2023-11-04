import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe-sesion',
  templateUrl: './profe-sesion.page.html',
  styleUrls: ['./profe-sesion.page.scss'],
})
export class ProfeSesionPage implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(){
  }

  navegar(ruta:String){
    this.router.navigate(['/'+ruta]);
  }

}
