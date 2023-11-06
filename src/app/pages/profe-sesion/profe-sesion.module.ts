import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfeSesionPageRoutingModule } from './profe-sesion-routing.module';

import { ProfeSesionPage } from './profe-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfeSesionPageRoutingModule
  ],
  declarations: [ProfeSesionPage]
})
export class ProfeSesionPageModule {}
