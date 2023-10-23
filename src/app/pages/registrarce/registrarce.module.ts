import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarcePageRoutingModule } from './registrarce-routing.module';

import { RegistrarcePage } from './registrarce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarcePageRoutingModule
  ],
  declarations: [RegistrarcePage]
})
export class RegistrarcePageModule {}
