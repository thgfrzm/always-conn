import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PlansComponent } from './plans/plans.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'plan/:id', component: PlanDetailsComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
