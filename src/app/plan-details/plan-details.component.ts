import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  email: string;
  password: string;
  plan: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
