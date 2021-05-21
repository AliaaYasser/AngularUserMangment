import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private MyService:DemoService) {
   }
students:any;

  ngOnInit(): void {
    this.MyService.getAllUser().subscribe(
      (res)=>{
       console.log(res)
        this.students=res;
      },
      (err)=>{}
    )
  }

}
