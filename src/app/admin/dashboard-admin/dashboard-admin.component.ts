import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  dataArray:any = [];
  searchedKeyword!:string;
  messageErr="" ;
  chartType:any;
  chartDatasets:any = []; 
  chartLabels:any = [];
  chartColors:any = [];
  chartReady = false;

  admindata:any;

  constructor(public UsersService:UsersService, public router:Router) { 
    this.chartType = 'bar';
    this.admindata = JSON.parse( localStorage.getItem('admindata') !);
    console.log(this.admindata.firstname)
 

    this.chartLabels = ['Users', 'Missions', 'Categories', 'Langugages'];
  
    this.chartColors = [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
  
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
  
        ],
        borderWidth: 2,
      }
    ];
  

    this.UsersService.countall().subscribe(result=>{
      
      console.log(result)
      this.chartDatasets =[ 
        { data: [result.data[0], result.data[1], result.data[2], result.data[3]], label: 'Freelancy Stats'  }]
     // this.chartDatasets = [ this.chartDatasets[0] ]
     this.chartReady=true; 
     console.log(this.chartDatasets)
      debugger
      this.dataArray=result
      
 
      
         ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
   
    
  }



  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }
  ngOnInit(): void {

  }
  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}
