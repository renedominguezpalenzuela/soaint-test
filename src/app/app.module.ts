import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//-------------------------------------------
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LandingpageModule } from './landingpage/landingpage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //---------------------------
    MatCheckboxModule,
    LandingpageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
