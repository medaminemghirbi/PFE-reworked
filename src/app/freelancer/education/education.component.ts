import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  clicked: boolean = false;
  clickedd: boolean = false;
  dataArray: any = [];
  messageErr = ''
  freelancerdata: any;
  id: any;
  addeducation!: FormGroup;
  constructor(public router: Router, public usersService: UsersService) {
    this.freelancerdata = JSON.parse(localStorage.getItem('freelancerdata')!);
    this.addeducation = new FormGroup({
      ecole: new FormControl('', [Validators.required]),
      dateDebut: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required]),
    });
    //  console.log(this.freelancerdata)
  }

  ngOnInit(): void {
    this.getfreelancereducation(this.id);

  }
  click() {

    this.clicked = true
  }
  clicker() {

    this.clickedd = true
  }
  cancel() {
    this.clicked = false
  }
  canceler() {
    this.clickedd = false
  }




  addschool(f: any) {
    const formData = new FormData();
    formData.append('ecole', this.addeducation.value.ecole);
    formData.append('dateDebut', this.addeducation.value.dateDebut);
    formData.append('dateFin', this.addeducation.value.dateFin);
    formData.append('user_id', this.freelancerdata.id);

    let data = f.value

    console.log(data)

    this.usersService.addschool(formData).subscribe(() => {
      console.log(data)

      window.location.reload();

    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
      console.log(err.error)
      console.log(err.status)

    });
  }

  deleteeducation(id: any) {
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
        this.usersService.deleteeducation(id).subscribe(response => {
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
  dataeducation = {
    id: '',
    ecole: '',
    dateDebut: new Date(),
    dateFin: new Date()
    /* averagePayment:0 ,
     period:0,
     start_date:'',
     end_date:'',
     */
  }
  getdata(ecole: string, dateDebut: Date, dateFin: Date, id: any) {

    this.dataeducation.ecole = ecole
    this.dataeducation.dateDebut = dateDebut
    this.dataeducation.dateFin = dateFin
    this.dataeducation.id = id
    console.log(this.dataeducation)

  }

  updateschool(f: any) {
    const formData = new FormData();
    formData.append('ecole', this.addeducation.value.ecole);
    formData.append('dateDebut', this.addeducation.value.dateDebut);
    formData.append('dateFin', this.addeducation.value.dateFin);
    formData.append('user_id', this.freelancerdata.id);

    let data = f.value

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersService.updateschool(this.dataeducation.id, formData).subscribe(response => {
          console.log(response)

          let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataArray.id)

          //this.dataArray[indexId].id=data.id
          this.dataArray[indexId].ecole = data.ecole
          this.dataArray[indexId].dateDebut = data.dateDebut
          this.dataArray[indexId].dateFin = data.dateFin



        }, (err: HttpErrorResponse) => {
          console.log(err.message)

        })

        Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {

        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }





  getfreelancereducation(id: any) {
    this.usersService.getfreelancereducation(this.freelancerdata.id).subscribe(data => {

      console.log(data)
      this.dataArray = data, (err: HttpErrorResponse) => {
        console.log(err)
        this.messageErr = "We dont't found this user in our database"
      }
      //console.log(this.dataArray)
    })
  }

}