import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'login',
    component: AutenticacionComponent,
    pathMatch: 'full',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule),
  },
/*
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '404',
    loadChildren: () =>
      import('./core/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
