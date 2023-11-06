import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe-qr',
  templateUrl: './profe-qr.page.html',
  styleUrls: ['./profe-qr.page.scss'],
})
export class ProfeQrPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar(ruta: String) {
    this.router.navigate(['/' + ruta]);
  }
}
