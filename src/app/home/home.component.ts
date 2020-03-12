import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit() {
    this.document.body.classList.add('bg-home');
  }

  onSubmit() {
    this.document.body.classList.remove('bg-home');
    this.router.navigate(['/signup'], { 
      state: { 
        data: { email: this.email }
      } 
    });
  }

}
