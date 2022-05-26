import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-client',
  templateUrl: './dashbord-client.component.html',
  styleUrls: ['./dashbord-client.component.css']
})
export class DashbordClientComponent implements OnInit {
  clientdata:any;
  constructor() { 
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata)
  }

  ngOnInit(): void {
  }

}
