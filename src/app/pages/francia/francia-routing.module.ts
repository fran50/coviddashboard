import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranciaComponent } from './francia.component';

const routes: Routes = [{ path: '', component: FranciaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranciaRoutingModule { }
