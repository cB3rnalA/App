import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidDataRecPage } from './valid-data-rec.page';

const routes: Routes = [
  {
    path: '',
    component: ValidDataRecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidDataRecPageRoutingModule {}
