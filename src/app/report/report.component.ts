import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
name:any;
  constructor() { 
    let a = localStorage.getItem('name');
    this.name = a;
  }

  ngOnInit(): void {
  }

}
