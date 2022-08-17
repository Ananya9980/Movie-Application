import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user';
import { NgModule } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { Movielist } from '../movielist';
import { Movieuser } from '../movieuser';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


username : string ="";
email: string ="";
password : string ="";
show: boolean= false;

// clear(){
// this.username ="";
// this.email="";
// this.password = "";
// this.show = true;
// }

public showPasswordOnPress: boolean | undefined;

constructor( private loginService: LoginServiceService,
    private registerService: RegisterServiceService,private movieList_:MovielistService ,private route:Router, private router:ActivatedRoute) 
{ }

user= new User();
message='';
movie=new Movielist();
movieUser! : Movieuser[];


loginCheck() {
  this.registerService.loginUser(this.user).subscribe(data=>
    {
      console.log("logged in successfully");
      sessionStorage.setItem('token', data.token);
      console.log("Token in sessionstorage : "+sessionStorage.getItem('token'));
    
    this.movieList_.retriveemail(this.user.email);
      this.route.navigate(['/crud']);
          this.movieUser=data ;
    },
    error=>{
            console.log("Exception occured !!");
      this.message="Invalid registration "+ this.user.username+" Please try again."
    })
}


ngOnInit(): void {}

goToRegister(){
  this.route.navigate(['/register']);
}

}






