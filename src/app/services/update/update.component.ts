import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { DemoService } from '../demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id;
ourValidationForm :any;
  constructor(MyActive:ActivatedRoute,private myService:DemoService,private route:Router) {
 this.id=MyActive.snapshot.params.id;
 
  }
  student:any;
 async ngOnInit() {
   await this.myService.getUser(this.id).subscribe(
      (res)=>{
       
        this.student=res;

      },
      (err)=>{}
    )
  
  }
   updateUser(n:string,a:string,m:string){
     let user={name:n,age:a,email:m};
     
     this.myService.UpdateUser(this.id,user).subscribe(
       (res)=>{
        
        this.route.navigate(['/students']);
       },
       (err)=>{}
       
     )
     return false;
   }


   
 

}
