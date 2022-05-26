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
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MissionsComponent } from './admin/missions/missions.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { DashbordClientComponent } from './client/dashbord-client/dashbord-client.component';
import { ClientSiderBarComponent } from './client/client-sider-bar/client-sider-bar.component';
import { PostulatedMissionsClientComponent } from './client/postulated-missions-client/postulated-missions-client.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { ActiveMissionsClientComponent } from './client/active-missions-client/active-missions-client.component';
import { EndedMissionsClientComponent } from './client/ended-missions-client/ended-missions-client.component';
import { AddmissionComponent } from './client/addmission/addmission.component';
import { EditProfilClientComponent } from './client/edit-profil-client/edit-profil-client.component';
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
    MissionsComponent,
    SkillsComponent,
    AllusersComponent,
    ProfilAdminComponent,
    DashbordClientComponent,
    ClientSiderBarComponent,
    PostulatedMissionsClientComponent,
    MissionsClientComponent,
    ActiveMissionsClientComponent,
    EndedMissionsClientComponent,
    AddmissionComponent,
    EditProfilClientComponent,
      ],
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
