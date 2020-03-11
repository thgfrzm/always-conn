import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My email is ${this.email}.`;
    alert(allInfo); 
  }

}
