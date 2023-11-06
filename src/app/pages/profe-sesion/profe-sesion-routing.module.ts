import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfeSesionPage } from './profe-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: ProfeSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfeSesionPageRoutingModule {}
