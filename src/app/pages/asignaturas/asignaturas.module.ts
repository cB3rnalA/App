import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasPageRoutingModule } from './asignaturas-routing.module';

import { AsignaturasPage } from './asignaturas.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [AsignaturasPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AsignaturasPageRoutingModule,
        ComponentsModule
    ]
})
export class AsignaturasPageModule {}
