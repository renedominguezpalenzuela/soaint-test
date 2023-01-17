import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';


import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ]
})
export class LandingpageModule { }
