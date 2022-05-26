import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.component.html',
  styleUrls: ['./detail-mission.component.css']
})
export class DetailMissionComponent implements OnInit {
  missions:any = "./assets/img/missions.jpeg";
  languages: { "id": number, "name": string }[] = []
  selectedDefaultLanguage:any
  //logo:any = "./assets/mission.png";
  //search = faSearch;
  freelancers:any;
  //dataArraye:any = [];
  dataArray:any = [];
  datacate:any = [];
  languagedata:any = []
  //datalanguage:any = [];
  messageErr ='';
  //produits: any;
 // freelancerdata: any;
  //dataArrayy: any = 1 ;
  count: any;
  data: any =[];


  constructor(private activatedRoute: ActivatedRoute, private usersService:UsersService , private route : Router ) {

   }
  ngOnInit(): void { 
    this.usersService.missionhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

}



}