import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  logo:any = "./assets/lg.png";
  resetemaillink! :  UntypedFormGroup;
  messageSuccess = '' ;
  messageErr =''
  constructor(private usersService:UsersService,private route:Router) {
    this.resetemaillink = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required])

    });
   }

  ngOnInit(): void {
  }
  sendresetlinkk (f:any)
  {

    const formData = new FormData();
    formData.append('email', this.resetemaillink.value.email);
    let data=f.value
     
    this.usersService.sendresetlink(formData).subscribe( ()=>{
      
    debugger
     // console.log(formData)
     
      Swal.fire('REset Link Sent Avec Succes!', '', 'success')


  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
     console.log(err.status)
     
  }) ;
  }
}
