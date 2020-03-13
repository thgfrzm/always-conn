import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pageTitle: string;
  pageHeading: string;
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageTitle = 'Create a password to choose a subscription plan';
    this.pageHeading = 'Only 2 more steps to go. We hate forms too!';
    this.email = history.state.data.email;
  }

  onSubmit() {
    this.router.navigate(['/plans'], { 
      state: { 
        data: { email: this.email, password: this.password }
      } 
    });
  }

}
