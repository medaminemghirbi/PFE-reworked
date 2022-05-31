import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generatecontratclient',
  templateUrl: './generatecontratclient.component.html',
  styleUrls: ['./generatecontratclient.component.css']
})
export class GeneratecontratclientComponent implements OnInit {

  messageErr = ''
  dataArray: any;
  dataArrayy: any;
  logged_in: boolean = false;
  role: string = '';
  clientdata: any;
dataArrayx:any
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.logged_in = JSON.parse(localStorage.getItem('logged_in')!);
    console.log(this.logged_in)

    this.role = JSON.parse(localStorage.getItem('role')!);
    console.log(this.role)
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata.id)

  }
  ngOnInit(): void {
    this.usersService.getrequestacceptedbyclient(this.clientdata.id).subscribe(data=>{
      console.log(data)
      this.dataArrayx = data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.missionhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    
    this.usersService.clienthomedata(this.clientdata.id).subscribe(data=>{
      debugger
      console.log(data)
      this.dataArray = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    


  }

  generate() {
    window.print()

  }
}