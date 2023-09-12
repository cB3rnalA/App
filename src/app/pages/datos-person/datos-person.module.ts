import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPersonPageRoutingModule } from './datos-person-routing.module';

import { DatosPersonPage } from './datos-person.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [DatosPersonPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatosPersonPageRoutingModule,
        ComponentsModule
    ]
})
export class DatosPersonPageModule {}
