import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private service:UserService){
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
