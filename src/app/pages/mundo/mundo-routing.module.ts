import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundoComponent } from './mundo.component';

const routes: Routes = [{ path: '', component: MundoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MundoRoutingModule { }
