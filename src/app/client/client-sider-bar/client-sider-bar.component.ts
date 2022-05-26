import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-client-sider-bar',
  templateUrl: './client-sider-bar.component.html',
  styleUrls: ['./client-sider-bar.component.css']
})
export class ClientSiderBarComponent implements OnInit {
  constructor(public UsersService:UsersService, public router:Router) { 

  }

  ngOnInit(): void {
  
  }
  logout(){
    this.UsersService.logout();
    this.router.navigate(['/login']);
    localStorage.clear()

   
  }
}