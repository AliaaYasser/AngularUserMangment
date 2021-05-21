import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { DemoService } from '../demo.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  constructor(MyActive:ActivatedRoute,private myService:DemoService,private route:Router) {

   }

   ngOnInit(): void {
   }
    addUser(n:string,a:string,m:string){
      let user={name:n,age:a,email:m};
      console.log("kkkkkkk")
      this.myService.addUser(user).subscribe(
        (res)=>{
         
          this.route.navigate(['/students']);
        },
        (err)=>{}
        
      )
      return false;
    }


    ourValidationForm = new FormGroup({
      Name: new FormControl("",Validators.required),
      Age: new FormControl(20,[Validators.min(18), Validators.max(50),Validators.required])
    })
    get NameValid(){
      
      return this.ourValidationForm.controls.Name.valid;
    }
    get AgeValid(){
    
      return this.ourValidationForm.controls.Age.valid;
    }

}
