import { Injectable } from '@angular/core';
import { RegisterServiceService } from './register-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

 
  // isLoginValidated:boolean=false;
  isValidated:boolean=false;
  liveStreamingUser:boolean=false;
  static isLoggedIn:boolean=false;

  constructor(private registerService:RegisterServiceService) {  }

 
  
  validate(email: string, password: string): boolean {
    console.log(email, password)
    if (email === '' || password === '' || email==='ananya@gmail.com' && password!='12345') {
      console.log('Service : isValidated : ' + this.isValidated);
      this.isValidated = false;
    }
    else {
      this.isValidated = true;
     console.log('Service : isValidated : ' + this.isValidated);
    }
    return this.isValidated;
  }

  // validationForAuthGuard()
  // { 
  //   return this.isValidated;
  // }

  

  userLoginStatus()
  {
    return LoginServiceService.isLoggedIn;
  }
  
}
