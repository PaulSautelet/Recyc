import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdamPage } from './adam.page';

const routes: Routes = [
  {
    path: '',
    component: AdamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdamPageRoutingModule {}
