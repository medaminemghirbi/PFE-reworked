import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartsModule,  MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './user/about/about.component';
import { MissionComponent } from './user/mission/mission.component';
import { FreelancerComponent } from './user/freelancer/freelancer.component';
import { DetailFreelancerComponent } from './user/detail-freelancer/detail-freelancer.component';
import { DetailClientComponent } from './user/detail-client/detail-client.component';
import { DetailMissionComponent } from './user/detail-mission/detail-mission.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './user/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './user/footer/footer.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AdminSiderbarComponent } from './admin/admin-siderbar/admin-siderbar.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    MissionComponent,
    FreelancerComponent,
    DetailFreelancerComponent,
    DetailClientComponent,
    DetailMissionComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ContactComponent,
    FooterComponent,
    DashboardAdminComponent,
    AdminSiderbarComponent,
    UserNavbarComponent,
    CategoriesComponent,
    AddCategoryComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MDBBootstrapModule,
    NgSelectModule,
    FormsModule ,  
    ReactiveFormsModule,
    ChartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
