import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'tr [app-student-item]',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
@Input() user:any;
  constructor(private MyService:DemoService,private route:Router) { }

  ngOnInit(): void {
  }

  deleteUser(id:number){
    //console.log("deleyey")
    this.MyService.deleteUser(id).subscribe(
      (res)=>{
      },
      (err)=>{}
    )
    this.route.navigate(['/students']);

  }
}
