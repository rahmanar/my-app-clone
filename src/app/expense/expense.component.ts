import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  uexpense:any;
  uamount:any;
  expenses: any = [];
  sum:any;

  constructor() {
    let a = localStorage.getItem('expenses');
      if (a) 
      {
      this.expenses = JSON.parse(a);
      } 
   }

  ngOnInit(): void {
  }

  add(){
    if (this.uamount == "" || this.uexpense == null) {
      alert("Please fill the All fields")
    }
    else {
      let f =
      {
        amount: this.uamount,
        expense: this.uexpense
      };
      this.expenses.push(f);
      // console.log(this.expenses);
      localStorage.setItem('expenses', JSON.stringify(this.expenses));
      this.sum = this.expenses.reduce((a: number, b: any) => {
        return a + parseInt(b.amount);
      }, 0);
      // console.log(this.sum);
    }
  
  }
  delete(i: any) {
    var arrEl = this.expenses[i];
    var qua = arrEl.amount;
    this.sum=(parseInt(this.sum)-parseInt(qua));
    this.expenses.splice(i, 1);
    // this.z = this.list.find((x:any) => x.Description === 'food' );
    // console.log(this.z);
  }

  refresh() {
    setInterval(function () {
      document.location.reload();
    }, 100);
    window.localStorage.removeItem('expenses');
  }

}
