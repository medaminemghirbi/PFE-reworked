import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-siderbar',
  templateUrl: './admin-siderbar.component.html',
  styleUrls: ['./admin-siderbar.component.css']
})
export class AdminSiderbarComponent implements OnInit {
  searchedKeyword!:string;
  

  messageErr:any;
  admindata:any;
  constructor(private route:Router, private servicesService:UsersService) {
  this.admindata = JSON.parse( localStorage.getItem('admindata') !);
    console.log(this.admindata.firstname)

}
  ngOnInit(): void {
  
  }
  logout(){
  
    this.servicesService.logout();
    this.route.navigate(['/login']);
   
  }
}
