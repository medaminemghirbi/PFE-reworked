import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { UsersService } from 'src/app/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {
  search = faSearch;
  freelancers:any;
  dataArray:any = [];
  datacate:any = [];
  messageErr ='';
  stepOneOfOneForm : any ;
  p:number = 1 ;
  searchedKeyword!:string;
  languages: { "id": number, "name": string }[] = []

  selectedDefaultLanguage:any

  languagedata:any = []

  constructor(private usersService:UsersService,) { 
   // this.produits = usersService.listeProduits();
   this.stepOneOfOneForm = new FormGroup({
    language_id: new FormControl('', [Validators.required]),
  });
  
    this.usersService.getallfreelancers().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
        ///****************************************************  languages  ************************************///
        this.usersService.getAllLanguages().subscribe(language=>{ 
          //debugger
        language.forEach((l: { [x: string]: any; }) => this.languages.push({ "id": l["id"], "name": l["name"] }));
        this.languagedata=language
        this.languagedata.forEach((element: any) => {
       console.log(element)
        });
        (err:HttpErrorResponse)=>{
        console.log(err)
        this.messageErr="We dont't found this language in our database"}
        }) 

    //this.freelancers = user.listefreelancers();
  }

  getfreelancerbylanguage (  ) {    
    this.usersService.getfreelancerbylanguage(this.selectedDefaultLanguage).subscribe(response=>{
      console.log(response)
      
       this.dataArray = response ;
    })
  }
/**************************** getfreelancerbyrating   *****************************/
  freelancersbyrating( rating : any ) {
    this.usersService.freelancersbyrating(rating).subscribe(response=>{
      console.log(response)
      this.dataArray = response ;
    })
  }
  getallfreelancers (  ) {  
  this.usersService.getallfreelancers().subscribe(data=>{
    console.log(data)
    this.dataArray=data , (err:HttpErrorResponse)=>{
      console.log(err)
    this.messageErr="We dont't found this user in our database"} 
    //console.log(this.dataArray)
  }) 
  }

  ngOnInit(): void {
  }
  ///****************************************************  missionbylanguages  ************************************///
  /*missionbylanguages ( language_id : any ) {
    //this.usersService.getmissionbylanguage(language_id).subscribe(response=>{
      console.log(response)
       this.dataArray = response ;
    })
  }*/

}