import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { ReportComponent } from './report/report.component';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';


const routes: Routes = [ 
  {path:"income",component:IncomeComponent},
  {path:"expense",component:ExpenseComponent},
  {path:"report",component:ReportComponent},
  {path:"",component:AppComponent},
  {path:"dummy",component:DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [IncomeComponent,ExpenseComponent,DummyComponent,ReportComponent,AppComponent] 
