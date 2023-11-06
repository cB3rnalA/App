import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfePageRoutingModule } from './profe-routing.module';

import { ProfePage } from './profe.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ProfePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfePageRoutingModule,
        ComponentsModule
    ]
})
export class ProfePageModule {}
