import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPersonPage } from './datos-person.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPersonPageRoutingModule {}
