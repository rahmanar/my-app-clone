import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() {
    let a = localStorage.getItem('list');
    if (a) {
      this.list = JSON.parse(a);
    }

    let b = localStorage.getItem('expenses');
    if (b) {
      this.expenses = JSON.parse(b);
    }

    let c = localStorage.getItem('dummy');
    if(c){
      this.dummy = JSON.parse(c)
    }

    
   }

list:any = [];
expenses:any = [];
dummy:any = [];
udate:any;
utype:any;
ucate:any;
udesc:any;
uamt:any;
incomee:any;
expene:any ;
totalIncome:any;
totalExpense:any;
totalBalance:any;

// l:any;u:any;d:any;
   incomeFunction(){
      this.incomee = true;
      this.expene = false;
   }
   expenseFunction(){
      this.expene=true;
      this.incomee=false;
   }

   add(){
     let f = {
       date : this.udate,
       type : this.utype,
       categories : this.ucate,
       description:this.udesc,
       amount:this.uamt,
       incomee:false,
       expene:false,
 
     };
     this.dummy.push(f);
    //  console.log(this.dummy)
     localStorage.setItem('dummy',JSON.stringify(this.dummy));

     let obj = this.dummy.filter((a:any)=>a.type === 'income');
     console.log(obj);
     this.totalIncome = obj.reduce((a:number,b:any)=>{
        return a + parseInt(b.amount);
      },0);
    //  console.log(this.totalIncome);
     let obj1 = this.dummy.filter((x:any)=>x.type === 'expense');
     this.totalExpense = obj1.reduce((a:number,b:any)=>{
       return a + parseInt(b.amount);
     },0);
    //  console.log(this.totalExpense);
     this.totalBalance = (parseInt(this.totalIncome )- parseInt(this.totalExpense));
    //  console.log(this.totalBalance);
     localStorage.setItem("a",this.totalIncome);
     localStorage.setItem("b",this.totalExpense);
     localStorage.setItem("c",this.totalBalance);

    //  this.l = localStorage.getItem("a");
    //  this.u=localStorage.getItem("b");
    //  this.d=localStorage.getItem("c");

   }

   delete(i: any){
     let arrEl = this.dummy[i];
    //  var qua = arrEl.amount;
    //  console.log(qua);
    if(arrEl.type === 'income')
    {
      let qua = arrEl.amount;
      this.totalIncome = this.totalIncome - (parseInt(qua));
      // this.totalBalance = this.totalIncome - this.totalBalance;
      this.totalBalance = (parseInt(this.totalBalance) - parseInt(qua));
      // console.log(this.totalBalance);
    }else if(arrEl.type ==='expense')
    {
      let aqua = arrEl.amount;
      this.totalExpense = this.totalExpense - (parseInt(aqua));
      // this.totalBalance = this.totalBalance - this.totalExpense;
      this.totalBalance = (parseInt(this.totalBalance)+parseInt(aqua));
      // console.log(this.totalBalance);
    }
    this.dummy.splice(i, 1);
  }
  refresh() {
    setInterval(function () {
      document.location.reload();
    }, 100);
    window.localStorage.removeItem('dummy');
    window.localStorage.removeItem('a');
    window.localStorage.removeItem('b');
    window.localStorage.removeItem('c');
  }

  ngOnInit(): void {
  }

}
