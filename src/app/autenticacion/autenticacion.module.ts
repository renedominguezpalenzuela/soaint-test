import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from '../autenticacion/autenticacion.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: AutenticacionComponent },
 
 
];


@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AutenticacionModule { }
