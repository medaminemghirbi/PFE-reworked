import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-statstic',
  templateUrl: './statstic.component.html',
  styleUrls: ['./statstic.component.css']
})
export class StatsticComponent implements OnInit {

  dataArray:any = [];
  searchedKeyword!:string;
  messageErr="" ;
  chartType:any;
  chartOptions: any 
  chartDatasets:any = []; 
  chartLabels:any = [];
  chartColors:any = [];
  chartReady = false;



  constructor(public UsersService:UsersService, public router:Router) { 
    this.chartType = 'doughnut';

 

    this.chartLabels = ['Freelancers', 'Clients', 'Missions'];
  
    this.chartColors = [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
   
  
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
   
  
        ],
        borderWidth: 2,
      }
    ];
    this.chartOptions = {
      responsive: true
    };

    this.UsersService.countAllHome().subscribe(result=>{
      debugger
      this.chartDatasets =[ 
        { data: [result.data[0], result.data[1], result.data[2]],label: 'Freelancy Officiel statistic'  }
      ];
     // this.chartDatasets = [ this.chartDatasets[0] ]
     this.chartReady=true; 
      debugger
      this.dataArray=result
      
 
      
         ,
       (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"} 
    }) 
   
    
  }



  chartClicked(event: any): void {
  }

  chartHovered(event: any): void {
  }
  ngOnInit(): void {

  }
  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}



