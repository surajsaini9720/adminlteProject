import { NgModule, reflectComponentType } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReportComponent } from './components/report/report.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'table', component: TableComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'suppliers', component: SupplierComponent }, 
  { path: 'transactions', component: TransactionComponent },
  { path: 'report', component: ReportComponent },
    { path: 'user', component: UserComponent },

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
