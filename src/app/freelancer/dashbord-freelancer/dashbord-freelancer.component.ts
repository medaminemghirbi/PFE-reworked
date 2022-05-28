import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-freelancer',
  templateUrl: './dashbord-freelancer.component.html',
  styleUrls: ['./dashbord-freelancer.component.css']
})
export class DashbordFreelancerComponent implements OnInit {
  freelancerdata:any;
  
  constructor() { 
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)
  }
  ngOnInit(): void {
  }

}