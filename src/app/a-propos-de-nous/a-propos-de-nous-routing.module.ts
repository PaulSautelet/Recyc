import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AProposDeNousPage } from './a-propos-de-nous.page';

const routes: Routes = [
  {
    path: '',
    component: AProposDeNousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AProposDeNousPageRoutingModule {}
