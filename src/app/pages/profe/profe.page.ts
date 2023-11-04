import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage{

  constructor(private router:Router) { }

  navegar(ruta: String) {
    this.router.navigate(['/' + ruta]);
  }
}
