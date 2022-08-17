import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Movieuser } from '../movieuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string='a'
  password:string='1'
  getLoginDetails:FormGroup;
  public showPasswordOnPress: boolean | undefined;

  constructor(formBuilder:FormBuilder,
    private loginService: LoginServiceService,
     private registerService: RegisterServiceService ,private route:Router, private router:ActivatedRoute) 
  { 
    this.getLoginDetails = formBuilder.group({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
  }

  

  
  user= new User();
  message='';

  loginCheck() {
    this.registerService.loginUser(this.user).subscribe(data=>
      {
        console.log("logged in successfully");
        this.route.navigate(['/crud']);
      },
      error=>{
              console.log("Exception !!");
        this.message="Invalid registration "+ this.user.username+" Please try again."
      })
  }

  _movielist!: Movieuser[];
  ngOnInit(): void {
    this.registerService.getMovieListFromRemote().subscribe(
      data => {
        console.log("Movie details received");
        console.log("DATA: "+JSON.stringify(data));
        this._movielist=data;
      },
      error => console.log("Error occured")
    )
  }



  
  }
  



