import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarcePage } from './registrarce.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarcePageRoutingModule {}
