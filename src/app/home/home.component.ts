import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
incoma:any;
expensovia:any;
balanceya:any;
uname:any;
names:any;
  constructor() { 
    let a = localStorage.getItem('a');
    this.incoma = a;
    let b = localStorage.getItem('b');
    this.expensovia = b;
    let c = localStorage.getItem('c');
    this.balanceya = c;
    let d = localStorage.getItem('name');
    this.names = d;
  }

  ngOnInit(): void {
  }

  name(){
    localStorage.setItem('name',this.uname);
    window.localStorage.removeItem('list');
    window.localStorage.removeItem('dummy');
    window.localStorage.removeItem('expenses');
    window.localStorage.removeItem('a');
    window.localStorage.removeItem('b');
    window.localStorage.removeItem('c');

  }

}
