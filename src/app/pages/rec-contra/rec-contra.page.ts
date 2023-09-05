import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rec-contra',
  templateUrl: './rec-contra.page.html',
  styleUrls: ['./rec-contra.page.scss'],
})
export class RecContraPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navegar(ruta:String){
    console.log("antes");
    this.router.navigate(['/'+ruta]);
    console.log("funciona");
  }
}
