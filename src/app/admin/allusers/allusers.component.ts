import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  dataArray:any = [] ;
  dataArrayy:any = [] ;
  p:number = 1 ;
  dataStudent={
    id : '',
    email:'',
    role:'' ,
  
  }
  messageErr =''
  searchedKeyword!:string;
  messageSuccess = '' ;
  role: string ="" ;

  constructor(private usersService:UsersService,private route:Router ,private activatedRoute: ActivatedRoute  ) {
    
  }
  ngOnInit(): void {
    this.usersService.getAllusers().subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.freelancerhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
  }
  
  

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }

  details(id:any){
    this.route.navigate(['/users/'+id])
  }


  deleteuser(id:any  , i :number){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersService.deleteuser(id).subscribe(response=>{
          console.log(response)
          this.dataArray.splice(i,1)
    
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })





    
  }
  
  deleteclient (id:any  , i :number){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      this.usersService.deleteclient(id).subscribe(response=>{
        console.log(response)
        this.dataArray.splice(i,1)
  
      })
      
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  
 

}