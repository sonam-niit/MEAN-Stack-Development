import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
  }

  ngOnInit(){
   this.registerForm= this.formBuilder.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(8)]]
   })
  }

  submitted=false;

  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted=true;

    if(this.registerForm.invalid){
      return;
    }
    alert("form submitted")
  }

}
