import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecContraPageRoutingModule } from './rec-contra-routing.module';

import { RecContraPage } from './rec-contra.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecContraPageRoutingModule,
        ComponentsModule
    ],
    declarations: [RecContraPage]
})
export class RecContraPageModule { }
