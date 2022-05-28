import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-freelancer-skills',
  templateUrl: './freelancer-skills.component.html',
  styleUrls: ['./freelancer-skills.component.css']
})
export class FreelancerSkillsComponent implements OnInit {

  clicked:boolean=false;
  clickedd:boolean=false;
  dataArray:any = [];
  dataArrayy:any = [];
  messageErr =''
  freelancerdata:any;
  id:any;
  addlang! :  FormGroup;

  constructor(public usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    this.addlang = new FormGroup({
      language_id: new FormControl('', [Validators.required]),
      languagerate: new FormControl('', [Validators.required]),
      
    });
  //  console.log(this.freelancerdata)
   }

   datalanguage={
    id : '',
    user_id:'',
    language_id:'',
    languagerate:'',
   
  }
  
  getdata(user_id:string, language_id:string,languagerate:string,id:any){
    this.datalanguage.id= id
    this.datalanguage.user_id= user_id
    this.datalanguage.language_id =language_id 
    this.datalanguage.languagerate= languagerate 
  
  
    console.log(this.datalanguage)
  
  }
  
  updateLanguage (f:any){
    const formData = new FormData();
    formData.append('user_id', this.freelancerdata.id);
      formData.append('language_id', this.addlang.value.language_id);
      formData.append('languagerate', this.addlang.value.languagerate);
    
    let data=f.value
    
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        debugger
        this.usersService.updatefreelancerlanguages(this.datalanguage.id,formData).subscribe(response=>
          
          {
            
          console.log(response)
       
            let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataArray.id)
    
            //this.dataArray[indexId].id=data.id
          
          },(err:HttpErrorResponse)=>{
            console.log(err.message)
          
          })
  
        Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  
  
  }


  ngOnInit(): void {
    this.usersService.getfreelancerlanguage(this.freelancerdata.id).subscribe(data=>{
    
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 

    this.usersService.getAllLanguages().subscribe(data=>{
      // debugger
      console.log(data)
      
      this.dataArrayy=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"} 
      //console.log(this.dataArray)
    }) 

  }
  
  destroylanguagefreelancer(id:any){
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
        this.usersService.destroylanguagefreelancer(id).subscribe(response=>{
          window.location.reload();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  
    
  }

    click(){
    
      this.clicked =true
    }
    clicker(){
    
      this.clickedd =true
    }
    cancel(){
      this.clicked =false
    }
    canceler(){
      this.clickedd =false
    }
  
    getfreelancerlanguage(id:any){
      this.usersService.getfreelancerlanguage(this.freelancerdata.id).subscribe(data=>{
    
        console.log(data)
        this.dataArray=data , (err:HttpErrorResponse)=>{
          console.log(err)
        this.messageErr="We dont't found this user in our database"} 
        //console.log(this.dataArray)
      }) 
    }


    updatelanguage(f:any){
      const formData = new FormData();
      formData.append('user_id', this.freelancerdata.id);
      formData.append('language_id', this.addlang.value.language_id);
      formData.append('languagerate', this.addlang.value.languagerate);
      //let data=f.value
      
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          debugger
          this.usersService.updatelanguage(this.freelancerdata.id,formData).subscribe(response=>        
            {
              
            console.log(response)
         
              let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataArray.id)
      
              //this.dataArray[indexId].id=data.id
            
            },(err:HttpErrorResponse)=>{
              console.log(err.message)
            
            })
    
          Swal.fire('Saved!', '', 'success')
          window.location.reload();
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    
    
    }
}