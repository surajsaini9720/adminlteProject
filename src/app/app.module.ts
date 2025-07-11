import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormGroup } from '@angular/forms';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObliqueBackgroundComponent } from './components/oblique-background/oblique-background.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { Navbar2Component } from './components/navbar2/navbar2.component';
import { BuiltByDevelopersComponent } from './components/built-by-developers/built-by-developers.component';
import { WorkWithRocketsComponent } from './components/work-with-rockets/work-with-rockets.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { SalesOverviewComponent } from './components/sales-overview/sales-overview.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { ConfiguratorPanelComponent } from './components/configurator-panel/configurator-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
import { TableComponent } from './components/table/table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierComponent } from './components/supplier/supplier.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReportComponent } from './components/report/report.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ObliqueBackgroundComponent,
    LoginComponent,
    SignupComponent,
    Navbar2Component,
    BuiltByDevelopersComponent,
    WorkWithRocketsComponent,
    ActiveUsersComponent,
    SalesOverviewComponent,
    Footer2Component,
    ConfiguratorPanelComponent,
    DashboardComponent,
    SidebarComponent,
    Navbar3Component,
    TableComponent,
    CustomerComponent,
    SupplierComponent,
    TransactionComponent,
    ReportComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    RouterModule,   
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
