import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';


import {MatCheckboxModule} from '@angular/material/checkbox';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: LandingpageComponent },
]

@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class LandingpageModule { }
