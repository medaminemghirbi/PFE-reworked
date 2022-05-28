import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-freelancer-side-bar',
  templateUrl: './freelancer-side-bar.component.html',
  styleUrls: ['./freelancer-side-bar.component.css']
})
export class FreelancerSideBarComponent implements OnInit {

  freelancerdata:any;
  constructor(public UsersService:UsersService, public router:Router) { }

  ngOnInit(): void {
    this.freelancerdata = JSON.parse(localStorage.getItem('freelancerdata') ||'{}');
    console.log(this.freelancerdata.id)
  
  }

  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}