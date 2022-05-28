import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  clicked:boolean=false;
  clickedd:boolean=false;
  dataArray:any = [];
  messageErr =''
  freelancerdata:any;
  id:any;
  addexper! :  FormGroup;
  constructor(public usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    this.addexper = new FormGroup({
      entreprise: new FormControl('', [Validators.required]),
      dateDebut: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required]),
      jobType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      langugage: new FormControl('', [Validators.required]),
      languagerating: new FormControl('', [Validators.required]),
    });
  //  console.log(this.freelancerdata)
   }

  ngOnInit(): void {
    this.getfreealncerexperiance(this.freelancerdata.id);

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

getfreealncerexperiance(id:any){
  this.usersService.getfreelancerexperiance(this.freelancerdata.id).subscribe(data=>{

    console.log(data)
    this.dataArray=data , (err:HttpErrorResponse)=>{
      console.log(err)
    this.messageErr="We dont't found this user in our database"} 
    //console.log(this.dataArray)
  }) 
}

deletexperiance(id:any){
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
      this.usersService.deleteexperiance(id).subscribe(response=>{
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



addexperiance (f:any){
  const formData = new FormData();
  formData.append('jobType', this.addexper.value.jobType);
  formData.append('entreprise', this.addexper.value.entreprise);
  formData.append('description', this.addexper.value.description);
  formData.append('dateDebut', this.addexper.value.dateDebut);
  formData.append('dateFin', this.addexper.value.dateFin);
  //formData.append('langugage', this.addexper.value.langugage);
  //formData.append('languagerating', this.addexper.value.languagerating);
  formData.append('user_id',this.freelancerdata.id);
  
  
  let data=f.value
  
  console.log(data)
  
  this.usersService.addexperiance(formData).subscribe( ()=>{
      console.log(data)
    
      window.location.reload();

  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
     console.log(err.status)
     
  }) ;
}

dataexperiance={
  id : '',
  jobType:'',
  entreprise:'',
  description:'',
  languagerating:'',
  langugage:'',
  dateDebut:new Date() ,
  dateFin:new Date()
 /* averagePayment:0 ,
  period:0,
  start_date:'',
  end_date:'',
  */
}
getdata(entreprise:string,jobType:string,dateDebut:Date,dateFin:Date,description:string,id:any){
  this.dataexperiance.entreprise= entreprise
  this.dataexperiance.jobType= jobType 
  this.dataexperiance.dateDebut =dateDebut 
  this.dataexperiance.dateFin =dateFin 

  this.dataexperiance.description= description 
  this.dataexperiance.id= id 
  console.log(this.dataexperiance)

}

updateexperiance(f:any){
  const formData = new FormData();
  formData.append('jobType', this.addexper.value.jobType);
  formData.append('entreprise', this.addexper.value.entreprise);
  formData.append('description', this.addexper.value.description);
  formData.append('dateDebut', this.addexper.value.dateDebut);
  formData.append('dateFin', this.addexper.value.dateFin);
  //formData.append('langugage', this.addexper.value.langugage);
 // formData.append('languagerating', this.addexper.value.languagerating);
  formData.append('freelancer_id',this.freelancerdata.id);
  
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
      this.usersService.updateexperiance(this.dataexperiance.id,formData).subscribe(response=>
        
        {
          
        console.log(response)
     
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataArray.id)
  
          //this.dataArray[indexId].id=data.id
          this.dataArray[indexId].jobType=data.jobType
          this.dataArray[indexId].entreprise=data.entreprise
          this.dataArray[indexId].description=data.description
          this.dataArray[indexId].dateDebut=data.dateDebut  
          this.dataArray[indexId].langugage=data.langugage   
          this.dataArray[indexId].languagerating=data.languagerating     
          this.dataArray[indexId].dateFin=data.dateFin       
         

        
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