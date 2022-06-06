import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonsModule, CardsModule, ChartsModule,  MDBBootstrapModule, TableModule } from 'angular-bootstrap-md';
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
import { GeneratecvComponent } from './freelancer/generatecv/generatecv.component';
import { FreelancerSideBarComponent } from './freelancer/freelancer-side-bar/freelancer-side-bar.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { EducationComponent } from './freelancer/education/education.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { ExperienceComponent } from './freelancer/experience/experience.component';
import { FavorisComponent } from './freelancer/favoris/favoris.component';
import { PostulatedMissionFreelancerComponent } from './freelancer/postulated-mission-freelancer/postulated-mission-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { FreelancerSkillsComponent } from './freelancer/freelancer-skills/freelancer-skills.component';
import { DescuterFreelancerComponent } from './freelancer/descuter-freelancer/descuter-freelancer.component';
import { DescuterComponent } from './client/descuter/descuter.component';
import { OrderByPipe } from './order-by.pipe';
import { GeneratecontratclientComponent } from './client/generatecontratclient/generatecontratclient.component';
import { GeneratecontratfreelancerComponent } from './freelancer/generatecontratfreelancer/generatecontratfreelancer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatsticComponent } from './user/statstic/statstic.component';
@NgModule({
  declarations: [
    OrderByPipe,
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
    GeneratecvComponent,
    FreelancerSideBarComponent,
    DashbordFreelancerComponent,
    ActiveMissionsFreelancerComponent,
    EducationComponent,
    EndedMissionsFreelancerComponent,
    ExperienceComponent,
    FavorisComponent,
    PostulatedMissionFreelancerComponent,
    ProfilFreelancerComponent,
    FreelancerSkillsComponent,
    DescuterFreelancerComponent,
    DescuterComponent,
    GeneratecontratclientComponent,
    GeneratecontratfreelancerComponent,
    StatsticComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    CardsModule,
    ButtonsModule,
    FormsModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    ChartsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    TableModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot()
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
