import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  pageTitle: string;
  pageHeading: string;
  planTitle: string;
  planHeading: string;
  email: string;
  password: string;
  plan: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageTitle = 'Plan details';
    this.pageHeading = 'Information about this plan';
    this.email = history.state.data.email;
    this.password = history.state.data.password;
    this.plan = this.route.snapshot.params.id;
  }

  backClicked() {
    this.router.navigate(['/plans'], { 
      state: { 
        data: { email: this.email, password: this.password }
      } 
    });
  }

  redirectUser(){
    this.router.navigate(['/user'], { 
      state: { 
        data: { email: this.email, password: this.password, plan: this.plan }
      } 
    });
  }

}
