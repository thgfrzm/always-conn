import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email: string;
  password: string;
  plan: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.email = history.state.data.email;
    this.password = history.state.data.password;
    this.plan = history.state.data.plan;
  }

  choosePlan(){
    this.router.navigate(['/plans'], { 
      state: { 
        data: { email: this.email, password: this.password }
      } 
    });
  }

}
