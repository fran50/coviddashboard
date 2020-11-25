import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'mundo', loadChildren: () => import('./pages/mundo/mundo.module').then(m => m.MundoModule) },
  { path: 'espana', loadChildren: () => import('./pages/espana/espana.module').then(m => m.EspanaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
