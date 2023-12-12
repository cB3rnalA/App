import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EscanerPageRoutingModule } from './escaner-routing.module';

import { EscanerPage } from './escaner.page';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [EscanerPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EscanerPageRoutingModule,
        ComponentsModule
    ]
})
export class EscanerPageModule {}
