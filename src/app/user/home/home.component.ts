import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataArray:any = [];
  dataArrayy:any = [];
  messageErr =''
  logged_in:any;
  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllcategories().subscribe(data=>{
      this.connecter();
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

    this.usersService.countAllHome().subscribe(data=>{
      this.connecter();
      console.log(data)
      this.dataArrayy=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

  }
  connecter(){
    if(this.usersService.connecte ==true)
    this.logged_in =true
  }
}
