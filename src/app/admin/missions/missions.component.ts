import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  p:number = 1 ;
  dataStudent={
    id : '',
    title:'',
    description:''
   /* averagePayment:0 ,
    period:0,
    start_date:'',
    end_date:'',
    */
  }
  messageErr =''
  
  messageSuccess = '' ;
  title: string ="" ;
  searchedKeyword!:string;
  dataArray: any;

  constructor(private usersService:UsersService,private route:Router) {
    
  }
  messageErrr =''


  ngOnInit(): void {
    this.usersService.getAllMissions().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"} 
      //console.log(this.dataArray)
    }) 

    /*
    this.produitServiceService.getAllusers().subscribe(data=>{
      console.log(data)
      this.dataArrays=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErrr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    */
  }
  /*
  search() {
    if(this.title == "") 
      this.ngOnInit() ;
    else {
      this.posts = this.posts.filter(res =>{
        return this.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      }) 
    } 
  }
  */

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/posts/'+id])
  }


  delete(id:any  , i :number){

    this.usersService.deleteMission(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })
    
  }
  
    getdata(title:string,description:string,id:any){
      this.messageSuccess=''
      this.dataStudent.title=title
      this.dataStudent.description=description
      this.dataStudent.id=id
      console.log(this.dataStudent)
  
    }
    updatenewstudent(f:any){
      let data=f.value
      this.usersService.updateMission(this.dataStudent.id,data).subscribe(response=>
        {
        console.log(response)
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataStudent.id)
  
          this.dataArray[indexId].title=data.title
          this.dataArray[indexId].description=data.description
  
          this.messageSuccess=`this title : ${this.dataArray[indexId].title} is updated`
  
        },(err:HttpErrorResponse)=>{
          console.log(err.message)
        
        })
    }
  
  

}
