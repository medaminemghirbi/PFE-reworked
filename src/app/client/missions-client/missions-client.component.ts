import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-missions-client',
  templateUrl: './missions-client.component.html',
  styleUrls: ['./missions-client.component.css']
})
export class MissionsClientComponent implements OnInit {

  languages: { "id": number, "name": string }[] = []
  selectedDefaultLanguage:any
  languagedata:any = []

  p:number = 1 ;
  dataMission = {
    id : '',
    title:'',
    description:'' ,
    duration:'',
    beginingDate:'',
    category_id:'',
    language_id:'',
    budget:'',

  }
  addmissionn: any ;
  messageErr =''
  
  messageSuccess = '' ;
  title: string ="" ;
  searchedKeyword!:string;
  dataArray: any;
  dataArrayy: any;
  clientdata: any;
  submitted: boolean = false ;

  constructor(private usersService:UsersService,private route:Router) {
    this.clientdata = JSON.parse( localStorage.getItem('clientdata') !);
    console.log(this.clientdata)

    this.addmissionn = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      beginingDate: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      language_id: new FormControl('', [Validators.required]),
    });
    
  }
  

  ngOnInit(): void {
    this.usersService.getclientmission(this.clientdata.id).subscribe(data=>{
      console.log(data)
      this.dataArray = data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
      //console.log(this.dataArray)
    }) 
      /*-----Load Langugage---*/
  this.usersService.getAllLanguages().subscribe(language=>{ 
    //debugger
    language.forEach((l: { [x: string]: any; }) => this.languages.push({ "id": l["id"], "name": l["name"] }));
  this.languagedata=language
  this.languagedata.forEach((element: any) => {

  });
  (err:HttpErrorResponse)=>{
  console.log(err)
  this.messageErr="We dont't found this langugae in our database"}
  }) 

  /*------------- categories -------------------------- */

}

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }


  delete(id:any  , i :number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteMission(id).subscribe(response=>{
          console.log(response)
          this.dataArray.splice(i,1)   
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
    
  }
  
    getdata(title:string,description:string,duration:string  , beginingDate: string ,budget: string ,category_id:string  ,language_id: string ,id:any){
      this.messageSuccess=''
      this.dataMission.title=title

      this.dataMission.title=title
      this.dataMission.duration=duration
      this.dataMission.beginingDate=beginingDate
      this.dataMission.budget=budget
      this.dataMission.category_id=category_id
      this.dataMission.language_id=language_id

      this.dataMission.description=description
      this.dataMission.id=id
      console.log(this.dataMission)
  
    }
    updatemission(f:any){

      let data=f.value
      const formData = new FormData();
      formData.append('title', this.addmissionn.value.title);
      formData.append('description', this.addmissionn.value.description);
      formData.append('duration', this.addmissionn.value.duration);
      formData.append('beginingDate',this.addmissionn.value.beginingDate);
      formData.append('budget', this.addmissionn.value.budget);
      formData.append('category_id',this.addmissionn.value.category_id);
      formData.append('client_id',this.clientdata.id);
      formData.append('language_id',this.addmissionn.value.language_id);

    Swal.fire('Whooa!', 'Mission Succeffulfy updated !', 'success')
    this.usersService.updateMission(this.dataMission.id,formData).subscribe(response=>
      {
      console.log(response)
      this.submitted = true ;
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataMission.id)

        this.dataArray[indexId].id=data.id
        this.dataArray[indexId].title=data.title
        this.dataArray[indexId].description=data.description
        this.dataArray[indexId].duration=data.duration
        this.dataArray[indexId].beginingDate=data.beginingDate
        this.dataArray[indexId].budget=data.budget
        this.dataArray[indexId].category_id=data.category_id
        this.dataArray[indexId].language_id=data.language_id

        this.messageSuccess=`this title : ${this.dataArray[indexId].title} is updated`
        window.location.reload();
       this.route.navigate(['/missions-client']);
      
      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })

      
      
    }
  
  test(){
    console.log("hi")
  }

}
