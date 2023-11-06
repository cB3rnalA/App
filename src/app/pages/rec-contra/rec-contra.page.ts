import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-rec-contra',
  templateUrl: './rec-contra.page.html',
  styleUrls: ['./rec-contra.page.scss'],
})
export class RecContraPage implements OnInit {
  correo :any
  constructor(private router:Router, public authService : AuthenticationService) { }

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.correo)
  }

  navegar(ruta:String){
    console.log("antes");
    this.router.navigate(['/'+ruta]);
    console.log("funciona");
  }
}
