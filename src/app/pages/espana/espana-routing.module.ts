import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspanaComponent } from './espana.component';

const routes: Routes = [{ path: '', component: EspanaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspanaRoutingModule { }
