import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlansAdvantagesComponent } from './plans-advantages/plans-advantages.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlansAdvantagesComponent,
    HomeComponent,
    SignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
