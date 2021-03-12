import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  uincome:any;
  uamount:any;
  list: any = [];
  sum:any;
  total:any;
  constructor() {
      let a = localStorage.getItem('list');
      if (a) 
      {
      this.list = JSON.parse(a);
      } 
                }

  ngOnInit(): void {
  }
  
  add(){
    if (this.uamount == "" || this.uincome == null) {
      alert("Please fill the All fields")
    }
    else {
      let f =
      {
        amount: this.uamount,
        income: this.uincome,
        total:this.sum
      };
      this.list.push(f);
      // console.log(this.list);
      localStorage.setItem('list', JSON.stringify(this.list));
      this.sum = this.list.reduce((a: number, b: any) => {
        return a + parseInt(b.amount);
      }, 0);
      // console.log(this.sum);
    }
  
  }

  delete(i: any) {
    var arrEl = this.list[i];
    var qua = arrEl.amount;
    this.sum=(parseInt(this.sum)-parseInt(qua));
    this.list.splice(i, 1);
    // this.z = this.list.find((x:any) => x.Description === 'food' );
    // console.log(this.z);
  }

  refresh() {
    setInterval(function () {
      document.location.reload();
    }, 100);
    window.localStorage.removeItem('list');
  }
}
