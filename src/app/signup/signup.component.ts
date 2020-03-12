import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
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
