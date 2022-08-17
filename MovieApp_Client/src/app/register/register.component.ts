import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
import { User } from '../user';


@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


public showPasswordOnPress: boolean | undefined;


username : string ="";
email: string ="";
password : string ="";
// show: boolean= false;
// submit(){
// console.log("user name is " + this.username)
// this.clear();
// }
// clear(){
// this.username ="";
// this.email="";
// this.password = "";
// this.show = true;
// }
constructor(private registerService:RegisterServiceService,private route:Router) 
  {}

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
      this.route.navigate(['/login']);
    },
    error=>{
      console.log("Exception !!");
      this.message="Invalid registration "+ this.user.username+" Please try again."
    }
  );
}

}






