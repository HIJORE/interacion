import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm:FormGroup
  public red:string="red";
  constructor() { 
    this.reactiveForm= new FormGroup({
      username:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.required),
      confirmPassword:new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.reactiveForm);
    
  }
  get userName(){
    return this.reactiveForm.controls['username']
  }
  get email(){
    return this.reactiveForm.controls['email']
  }
  get password(){
    return this.reactiveForm.controls['password']
  }
  get confirmPassword(){
    return this.reactiveForm.controls['confirmPassword']
  }

}
