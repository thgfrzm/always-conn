import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  pageTitle: string;
  pageHeading: string;
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageTitle = 'Choose the best plan for you';
    this.pageHeading = 'Switch plans whenever you want';
    this.email = history.state.data.email;
    this.password = history.state.data.password;
  }

  choosePlan(plan){
    this.router.navigate(['/plan/', plan ], { 
      state: { 
        data: { email: this.email, password: this.password }
      } 
    });
  }

}
