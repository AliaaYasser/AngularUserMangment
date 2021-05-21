import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './services/add-student/add-student.component';
import { ErrorComponent } from './services/error/error.component';
import { StudentsDetailsComponent } from './services/students-details/students-details.component';
import { StudentsComponent } from './services/students/students.component';
import { UpdateComponent } from './services/update/update.component';

const routes: Routes = [ {path:'',component:StudentsComponent},
{path:'',redirectTo:'students' ,pathMatch:'full'},
{path:'studentNew',component:AddStudentComponent},

{path:'students',component:StudentsComponent},
{path:'Update/:id',component:UpdateComponent},


{path:'students/:id',component:StudentsDetailsComponent},
{path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
