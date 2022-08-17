import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  getRegisterDetails:FormGroup;
  public showPasswordOnPress: boolean | undefined;

  constructor(formBuilder:FormBuilder,private registerService:RegisterServiceService,
    private userservice:UserserviceService  ,private route:Router) 
  { 
    this.getRegisterDetails = formBuilder.group({
      'username':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'checkBox':new FormControl('')
    });
  }

  moviedata:any;

  ngOnInit(): void {
   // setInterval(()=>console.log(this.getRegisterDetails.valid),1000);

  }
 


  user= new User();
  message='';

  submitRegisterForm()
  {
    this.registerService.registerUser(this.user).subscribe(
      data=> {
        console.log("Registered successfully");
        //this.route.navigate(['/login']);
      },
      error=>{
        console.log("Exception !!");
        this.message="Invalid registration "+ this.user.username+" Please try again."
      }
    );
  }

}






