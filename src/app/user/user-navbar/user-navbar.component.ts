import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  logo:any = "./assets/lg.png";
  logged_in:boolean = false ;
  role: string = '';
  admindata:any;
  clientdata:any;
  freelancerdata:any;
  constructor( public userService :UsersService) {
    
    this.admindata = JSON.parse(sessionStorage.getItem('admindata')||'{}');
    this.clientdata = JSON.parse(sessionStorage.getItem('clientdata')||'{}');
    this.freelancerdata = JSON.parse(sessionStorage.getItem('freelancerdata')||'{}');
    this.logged_in = JSON.parse( sessionStorage.getItem('logged_in') !);
    console.log(this.logged_in)

    this.role = JSON.parse( sessionStorage.getItem('role') !);
    console.log(this.role)

   }

  ngOnInit(): void {
   
  }

}