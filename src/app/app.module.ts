import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import {MatTabsModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { BOARDINGFEESComponent } from './components/boarding-fees/boarding-fees.component';
import { CLEANINGSComponent } from './components/cleanings/cleanings.component';
import { SPECIALREQUESTSComponent } from './components/special-requests/special-requests.component';
import { PROFILESComponent } from './components/profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    BOARDINGFEESComponent,
    CLEANINGSComponent,
    SPECIALREQUESTSComponent,
    PROFILESComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
