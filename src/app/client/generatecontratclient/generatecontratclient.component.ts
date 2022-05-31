import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import * as pdfMake from'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-generatecontratclient',
  templateUrl: './generatecontratclient.component.html',
  styleUrls: ['./generatecontratclient.component.css']
})
export class GeneratecontratclientComponent implements OnInit {

  
  messageErr = ''
  dataArray: any;
  dataArrayy: any;
  logged_in: boolean = false;
  role: string = '';
  clientdata: any;
  dataArrayx:any
  docDefinition:any
  missiondetails:any
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.logged_in = JSON.parse(sessionStorage.getItem('logged_in')!);
    console.log(this.logged_in)

    this.role = JSON.parse(sessionStorage.getItem('role')!);
    console.log(this.role)
    this.clientdata = JSON.parse( sessionStorage.getItem('clientdata') !);
    this.missiondetails = JSON.parse( sessionStorage.getItem('missiondetails') !);
    console.log(this.clientdata.id)

  }
  ngOnInit(): void {
    this.usersService.getrequestacceptedbyclient(this.clientdata.id).subscribe(data=>{
      console.log(data)
      this.dataArrayx = data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this mission in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.missionhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      sessionStorage.setItem( 'missiondetails', JSON.stringify( data ) );
      console.log(data)
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    this.usersService.freelancerhomedata(this.clientdata.id).subscribe(data => {

      console.log(data)
      this.dataArray = data,
        (err: HttpErrorResponse) => {
          console.log(err)
          this.messageErr = "We dont't found this user in our database"
        }
      //console.log(this.dataArray)
    })

    


  }

  open() {
    this.docDefinition = {
      /*header: 'Resume',*/
      content: [
        {
          text: `Date: ${new Date().toLocaleString()}`,
          alignment: 'right'
        },
        {
          text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
          alignment: 'right'
        },
        {
          text: 'Freelancy Contract System',
          decoration: 'underline',
          fontSize: 20,
          alignment: 'center',
          color: '#047886'
        },
        
        {
          text:'Mission : '+" " +this.missiondetails.map(function(a:any) {return a.title;}),
          fontSize: 15,
          bold: true,
         

          color: 'Red'
        },

        {
          text: 'Freelancer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Client Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Mission Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Mission : " +this.missiondetails.map(function(a:any) {return a.title;}),
                bold: true
              },
              { text:"Description : " + this.missiondetails.map(function(a:any) {return a.description;})},
              { text:"Budget : " + this.missiondetails.map(function(a:any) {return a.budget;}) },
              { text:"Begining Date : " + this.missiondetails.map(function(a:any) {return a.beginingDate;})},
              {text:"duration : " +this.missiondetails.map(function(a:any) {return a.duration;})+"months"}
            ],
            [
      
            ]
          ]
        },
        {
          columns: [
            [{ qr: "salem", fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },

       
  
    
      ],
      
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
      pdfMake.createPdf(this.docDefinition).open();

  }
  print() {
    this.docDefinition = {
      /*header: 'Resume',*/
      content: [
        {
          text: `Date: ${new Date().toLocaleString()}`,
          alignment: 'right'
        },
        {
          text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
          alignment: 'right'
        },
        {
          text: 'Freelancy Contract System',
          decoration: 'underline',
          fontSize: 20,
          alignment: 'center',
          color: '#047886'
        },
        
        {
          text:'Mission : '+" " +this.missiondetails.map(function(a:any) {return a.title;}),
          fontSize: 15,
          bold: true,
         

          color: 'Red'
        },

        {
          text: 'Freelancer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Client Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Mission Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Mission : " +this.missiondetails.map(function(a:any) {return a.title;}),
                bold: true
              },
              { text:"Description : " + this.missiondetails.map(function(a:any) {return a.description;})},
              { text:"Budget : " + this.missiondetails.map(function(a:any) {return a.budget;}) },
              { text:"Begining Date : " + this.missiondetails.map(function(a:any) {return a.beginingDate;})},
              {text:"duration : " +this.missiondetails.map(function(a:any) {return a.duration;})+"months"}
            ],
            [
      
            ]
          ]
        },
        {
          columns: [
            { text: 'Signature', alignment: 'right', italics: true },
            { qr: "salem", fit: '50' },
         
          ]
        },

       
  
    
      ],
      
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
      pdfMake.createPdf(this.docDefinition).print();

  }
  download() {
    this.docDefinition = {
      /*header: 'Resume',*/
      content: [
        {
          text: `Date: ${new Date().toLocaleString()}`,
          alignment: 'right'
        },
        {
          text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
          alignment: 'right'
        },
        {
          text: 'Freelancy Contract System',
          decoration: 'underline',
          fontSize: 20,
          alignment: 'center',
          color: '#047886'
        },
        
        {
          text:'Mission : '+" " +this.missiondetails.map(function(a:any) {return a.title;}),
          fontSize: 15,
          bold: true,
         

          color: 'Red'
        },

        {
          text: 'Freelancer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Client Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Full Name : " +this.clientdata.lastname+" "+ this.clientdata.firstname,
                bold: true
              },
              { text:"Freelancer Email : " + this.clientdata.email},
              { text:"Phone Number : " + this.clientdata.phone },
              { text:"Freelancer Adress : " + this.clientdata.adresse }
            ],
            [
      
            ]
          ]
        },
        {
          text: 'Mission Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text:"Mission : " +this.missiondetails.map(function(a:any) {return a.title;}),
                bold: true
              },
              { text:"Description : " + this.missiondetails.map(function(a:any) {return a.description;})},
              { text:"Budget : " + this.missiondetails.map(function(a:any) {return a.budget;}) },
              { text:"Begining Date : " + this.missiondetails.map(function(a:any) {return a.beginingDate;})},
              {text:"duration : " +this.missiondetails.map(function(a:any) {return a.duration;})+"months"}
            ],
            [
      
            ]
          ]
        },
        {
          columns: [
            [{ qr: "salem", fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },

       
  
    
      ],
      
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
      pdfMake.createPdf(this.docDefinition).open();

  }
}