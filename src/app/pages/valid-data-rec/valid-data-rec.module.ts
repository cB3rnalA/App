import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidDataRecPageRoutingModule } from './valid-data-rec-routing.module';

import { ValidDataRecPage } from './valid-data-rec.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ValidDataRecPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ValidDataRecPageRoutingModule,
        ComponentsModule
    ]
})
export class ValidDataRecPageModule {}
