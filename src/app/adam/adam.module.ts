import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdamPageRoutingModule } from './adam-routing.module';

import { AdamPage } from './adam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdamPageRoutingModule
  ],
  declarations: [AdamPage]
})
export class AdamPageModule {}
