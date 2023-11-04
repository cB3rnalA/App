import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfeQrPageRoutingModule } from './profe-qr-routing.module';

import { ProfeQrPage } from './profe-qr.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ProfeQrPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfeQrPageRoutingModule,
        ComponentsModule
    ]
})
export class ProfeQrPageModule {}
