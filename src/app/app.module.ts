import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './services/students/students.component';
import { StudentsDetailsComponent } from './services/students-details/students-details.component';

import { StudentItemComponent } from './services/student-item/student-item.component';
import { AddStudentComponent } from './services/add-student/add-student.component';
import { ErrorComponent } from './services/error/error.component';
import { CustomDirective } from './diractive/custom.directive';
import { CustomPipe } from './Pipe/custom.pipe';
import { UpdateComponent } from './services/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    StudentItemComponent,
    AddStudentComponent,
    ErrorComponent,
    CustomDirective,
    CustomPipe,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
