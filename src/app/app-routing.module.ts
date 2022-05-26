import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
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
 
  {path:'reset/:token', component: ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'mission',component:MissionComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'freelancer',component:FreelancerComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboard'    , canActivate:[AuthGuard], component:DashboardAdminComponent } ,
  { path : 'categories' , canActivate:[AuthGuard]   , component : CategoriesComponent} ,
  { path : 'addcategory' , canActivate:[AuthGuard]    ,component:AddCategoryComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
