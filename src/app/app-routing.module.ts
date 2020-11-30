import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/mundo/mundo.module').then(m => m.MundoModule) 
  },
  { path: 'mundo', loadChildren: () => import('./pages/mundo/mundo.module').then(m => m.MundoModule) },
  { path: 'espana', loadChildren: () => import('./pages/espana/espana.module').then(m => m.EspanaModule) },
  { path: 'francia', loadChildren: () => import('./pages/francia/francia.module').then(m => m.FranciaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
