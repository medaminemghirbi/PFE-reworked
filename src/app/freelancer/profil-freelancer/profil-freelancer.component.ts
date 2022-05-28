import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-freelancer',
  templateUrl: './profil-freelancer.component.html',
  styleUrls: ['./profil-freelancer.component.css']
})
export class ProfilFreelancerComponent implements OnInit {

  messageErr:any;
  freelancerdata:any;
  admindata:any;
  upadate!: any;
  imageupdate!: any;
  image:any;
  messageSuccess: any;

  constructor(private route:Router, private usersService:UsersService) {
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)
    this.imageupdate = new FormGroup({
      avatar: new FormControl('', [Validators.required]),
    });
    this.upadate = new FormGroup({
     // avatar: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      // rating: new FormControl('', [Validators.required]),
      earning : new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      github: new FormControl('', [Validators.required]),
      facebook: new FormControl('', [Validators.required]),
      instagram : new FormControl('', [Validators.required]),
      linkedin: new FormControl('', [Validators.required]),
      rib: new FormControl('', [Validators.required]),
    //  password_confirmation: new FormControl('', [Validators.required]),
    });
  }
  
  getdata(email:string , id:any){
    this.messageSuccess=''
    this.freelancerdata.id = id 
    this.freelancerdata.email = email
    console.log(this.freelancerdata)

  }

  fileChange(event:any) {
    this.image =event.target.files[0];   
  }
 /* updateimage (f:any){
    let data=f.value
    const formData = new FormData();
   formData.append('avatar', this.image );
   this.usersService.updateimagefreelancer(this.freelancerdata.id,formData).subscribe(response=>
    {
      debugger
      localStorage.clear();
      localStorage.setItem( 'freelancerdata', JSON.stringify( response ) );
      window.location.reload();
   
    console.log(response)
      let indexId=this.freelancerdata.findIndex((obj:any)=>obj.id==this.freelancerdata.id)
      this.freelancerdata[indexId].user_image_url=data.user_image_url
      this.messageSuccess=`this email : ${this.freelancerdata[indexId].email} is updated`
    },(err:HttpErrorResponse)=>{
      console.log(err.message)
    
    })
    
  }*/


  updateimage(f:any){
    let data=f.value
    const imageformadata = new FormData();
    imageformadata.append('avatar', this.image );
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.usersService.updateimageuser(this.freelancerdata.id,imageformadata).subscribe(response=>
          {
            
           
            localStorage.setItem( 'freelancerdata', JSON.stringify( response ) );
            window.location.reload();
         
    
          },(err:HttpErrorResponse)=>{
            console.log(err.message)
          
          })
    //   this.route.navigate(['/dashbord-freelancer']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }








  updatenewuser (f:any){
    let data=f.value
    const formData = new FormData();
   // formData.append('avatar', this.image );
    formData.append('firstname', this.upadate.value.firstname);
    formData.append('lastname', this.upadate.value.lastname);
    formData.append('email', this.upadate.value.email);
    formData.append('adresse', this.upadate.value.adresse);
    formData.append('phone', this.upadate.value.phone);
    formData.append('job', this.upadate.value.job);
    formData.append('description', this.upadate.value.description);
    formData.append('birthday', this.upadate.value.birthday);
    formData.append('earning', this.upadate.value.earning);
    formData.append('password', this.upadate.value.password);
    formData.append('github', this.upadate.value.github);
    formData.append('facebook', this.upadate.value.facebook);
    formData.append('instagram', this.upadate.value.instagram);
    formData.append('linkedin', this.upadate.value.linkedin);
    formData.append('RIB', this.upadate.value.rib);
  // formData.append('password_confirmation', this.upadate.value.password_confirmation);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersService.updateProfileFreelancer(this.freelancerdata.id,formData).subscribe(response=>
          {
            
            
            localStorage.setItem( 'freelancerdata', JSON.stringify( response ) );
            window.location.reload();
         
          console.log(response)
            let indexId=this.freelancerdata.findIndex((obj:any)=>obj.id==this.freelancerdata.id)
    
            this.freelancerdata[indexId].email=data.email
            this.freelancerdata[indexId].user_image_url=data.user_image_url
            this.freelancerdata[indexId].firstname=data.firstname
            this.freelancerdata[indexId].lastname=data.lastname
            this.freelancerdata[indexId].adresse=data.adresse
            this.freelancerdata[indexId].phone=data.phone
            this.freelancerdata[indexId].job=data.job
            this.freelancerdata[indexId].description=data.description
            this.freelancerdata[indexId].birthday=data.birthday
            this.freelancerdata[indexId].earning=data.earning
            this.freelancerdata[indexId].password=data.password
            this.freelancerdata[indexId].password_confirmation=data.password_confirmation
            this.freelancerdata[indexId].github=data.github
            this.freelancerdata[indexId].facebook=data.facebook
            this.freelancerdata[indexId].instagram=data.instagram
            this.freelancerdata[indexId].linkedin=data.linkedin
            this.freelancerdata[indexId].rib=data.rib
            this.messageSuccess=`this email : ${this.freelancerdata[indexId].email} is updated`
    
          },(err:HttpErrorResponse)=>{
            console.log(err.message)
          
          })
       this.route.navigate(['/dashbord-freelancer']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

  
  ngOnInit(): void {
  }


}