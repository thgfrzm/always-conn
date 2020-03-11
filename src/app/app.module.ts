import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlansAdvantagesComponent } from './plans-advantages/plans-advantages.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HeaderComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlansAdvantagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
