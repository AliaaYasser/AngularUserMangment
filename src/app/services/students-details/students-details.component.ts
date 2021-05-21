import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  id:number;
  constructor(MyActive:ActivatedRoute,private myService:DemoService) {
    this.id=MyActive.snapshot.params.id;

   }
student:any;
  ngOnInit(): void {
    this.myService.getUser(this.id).subscribe(
      (res)=>{
       
        this.student=res;
      },
      (err)=>{}
    )}


}
