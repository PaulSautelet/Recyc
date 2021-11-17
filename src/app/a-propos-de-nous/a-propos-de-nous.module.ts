import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AProposDeNousPageRoutingModule } from './a-propos-de-nous-routing.module';

import { AProposDeNousPage } from './a-propos-de-nous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AProposDeNousPageRoutingModule
  ],
  declarations: [AProposDeNousPage]
})
export class AProposDeNousPageModule {}
