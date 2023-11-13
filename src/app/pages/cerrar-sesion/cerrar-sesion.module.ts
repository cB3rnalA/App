import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarSesionPageRoutingModule } from './cerrar-sesion-routing.module';

import { CerrarSesionPage } from './cerrar-sesion.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [CerrarSesionPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CerrarSesionPageRoutingModule,
        ComponentsModule
    ]
})
export class CerrarSesionPageModule {}
