import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateComponent } from './add-update/add-update.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,CustomInputComponent,AddUpdateComponent],
  exports:[HeaderComponent,FooterComponent,CustomInputComponent,ReactiveFormsModule,AddUpdateComponent] ,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
