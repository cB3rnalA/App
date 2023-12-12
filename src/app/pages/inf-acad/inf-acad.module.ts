import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfAcadPageRoutingModule } from './inf-acad-routing.module';

import { InfAcadPage } from './inf-acad.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [InfAcadPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfAcadPageRoutingModule,
        ComponentsModule
    ]
})
export class InfAcadPageModule {}
