import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   employeeForm:FormGroup=new FormGroup({});
   employeeObj:EmployeeModel=new EmployeeModel();
   constructor(){
  this.createForm()
 }

   createForm(){
    this.employeeForm=new FormGroup({
    empId:new FormControl(this.employeeObj.empId),
    name:new FormControl(this.employeeObj.name),
    city:new FormControl(this.employeeObj.city),
    address:new FormControl(this.employeeObj.address),
    contactNo:new FormControl(this.employeeObj.contactNo),
    emailId:new FormControl(this.employeeObj.emailId),
    pinCode:new FormControl(this.employeeObj.pinCode),
    state:new FormControl(this.employeeObj.state),
    })
   }

   onSave(){
    
   }

  }
