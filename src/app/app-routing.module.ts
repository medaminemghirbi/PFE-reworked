import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { ActiveMissionsClientComponent } from './client/active-missions-client/active-missions-client.component';
import { AddmissionComponent } from './client/addmission/addmission.component';
import { DashbordClientComponent } from './client/dashbord-client/dashbord-client.component';
import { DescuterComponent } from './client/descuter/descuter.component';
import { EditProfilClientComponent } from './client/edit-profil-client/edit-profil-client.component';
import { EndedMissionsClientComponent } from './client/ended-missions-client/ended-missions-client.component';
import { GeneratecontratclientComponent } from './client/generatecontratclient/generatecontratclient.component';
import { MissionsClientComponent } from './client/missions-client/missions-client.component';
import { PostulatedMissionsClientComponent } from './client/postulated-missions-client/postulated-missions-client.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { DashbordFreelancerComponent } from './freelancer/dashbord-freelancer/dashbord-freelancer.component';
import { DescuterFreelancerComponent } from './freelancer/descuter-freelancer/descuter-freelancer.component';
import { EducationComponent } from './freelancer/education/education.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { ExperienceComponent } from './freelancer/experience/experience.component';
import { FavorisComponent } from './freelancer/favoris/favoris.component';
import { FreelancerSkillsComponent } from './freelancer/freelancer-skills/freelancer-skills.component';
import { GeneratecvComponent } from './freelancer/generatecv/generatecv.component';
import { PostulatedMissionFreelancerComponent } from './freelancer/postulated-mission-freelancer/postulated-mission-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailClientComponent } from './user/detail-client/detail-client.component';
import { DetailFreelancerComponent } from './user/detail-freelancer/detail-freelancer.component';
import { DetailMissionComponent } from './user/detail-mission/detail-mission.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FreelancerComponent } from './user/freelancer/freelancer.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { MissionComponent } from './user/mission/mission.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'detail-client/:id',component:DetailClientComponent},
  {path:'detail-freelancer/:id',component:DetailFreelancerComponent},
  {path:'detail-mission/:id',component:DetailMissionComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:"addmission",canActivate:[AuthGuard],component:AddmissionComponent},

  {path:'reset/:token', component: ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'mission',component:MissionComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'freelancer',component:FreelancerComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboard-admin'    , canActivate:[AuthGuard], component:DashboardAdminComponent } ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'missions' , canActivate:[AuthGuard]   ,component : MissionsComponent} ,
  {path:"allskills",canActivate:[AuthGuard] ,component:SkillsComponent},
  {path:'allusers'  ,canActivate:[AuthGuard] , component:AllusersComponent} ,
  { path : 'profil-admin', canActivate:[AuthGuard], component:ProfilAdminComponent  },
  {path:'dashbord-client',canActivate:[AuthGuard]  ,component:DashbordClientComponent},
  { path : 'postulated-missions-client' ,canActivate:[AuthGuard]  , component:PostulatedMissionsClientComponent  },
  { path : 'active-missions-client' ,canActivate:[AuthGuard]  , component:ActiveMissionsClientComponent},
  { path : 'ended-missions-client' ,canActivate:[AuthGuard]  , component:EndedMissionsClientComponent},
  {path:"missions-client",canActivate:[AuthGuard],component:MissionsClientComponent},
  {path:'dashboard-freelancer',canActivate:[AuthGuard],component:DashbordFreelancerComponent},
  { path: 'postulated-missions-freelancer', canActivate: [AuthGuard], component: PostulatedMissionFreelancerComponent },
  { path: "generatecv/:id", canActivate: [AuthGuard], component: GeneratecvComponent },
  { path: 'favoris', canActivate: [AuthGuard], component: FavorisComponent },
  { path: 'active-missions-freelancer', canActivate: [AuthGuard], component: ActiveMissionsFreelancerComponent },
  { path: 'ended-missions-freelancer', canActivate: [AuthGuard], component: EndedMissionsFreelancerComponent },
  { path: 'profil-freelancer', canActivate: [AuthGuard], component: ProfilFreelancerComponent },
  { path: 'education', canActivate: [AuthGuard], component: EducationComponent },
  { path:'experience', canActivate:[AuthGuard] ,component:ExperienceComponent},
  { path:'skills', canActivate:[AuthGuard]  , component:FreelancerSkillsComponent},
  { path:'descuter/:id' , canActivate:[AuthGuard]  ,  component:DescuterComponent},
  { path:'descuter-freelancer/:id' , canActivate:[AuthGuard]  ,  component:DescuterFreelancerComponent},
  { path:'edit-client', canActivate:[AuthGuard]  ,  component:EditProfilClientComponent},
  { path: 'generatecontratclient/:id', canActivate: [AuthGuard], component: GeneratecontratclientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
