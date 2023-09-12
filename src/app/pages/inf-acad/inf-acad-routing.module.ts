import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfAcadPage } from './inf-acad.page';

const routes: Routes = [
  {
    path: '',
    component: InfAcadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfAcadPageRoutingModule {}
