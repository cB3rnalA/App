import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura1PageRoutingModule } from './asignatura1-routing.module';

import { Asignatura1Page } from './asignatura1.page';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
    declarations: [Asignatura1Page],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Asignatura1PageRoutingModule,
        ComponentsModule
    ]
})
export class Asignatura1PageModule {}
