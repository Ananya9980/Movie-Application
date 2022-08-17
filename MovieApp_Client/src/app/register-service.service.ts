import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  token: string | undefined;

  constructor(private myhttp:HttpClient) { }
 
  //movie service will save data in mongo from there some data will go to mysql
  //using feign
  public registerUser(user:User):Observable<any>
  {
   return this.myhttp.post<any>("http://localhost:9000/api/u1/register",user)
  }

  //generate token
  public loginUser(user:User):Observable<any>
  {
    return this.myhttp.post<any>("http://localhost:9000/api/u2/login",user)
    //return this.myhttp.post<any>(`${this.moviesUrl}/${this.loginService.loggedInEmailId()}`,movieObj,{headers: this.headers})  }
  }












  
  // getdata():Observable<any>
  // {
  //  var moviedataurl= this.gettingdataurl.concat(this.email);
  //  console.log(moviedataurl);
  //  console.log("token in service"+this.token);
  //  var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
  //  const httpOptions = {
  //   headers: headers_object
  // };
  //    return this.myhttp.get(`${moviedataurl}`,httpOptions);
  // }
 
 
 
  isRegisterValidated:boolean=false;
  validate(username:string,email:string,password:string):boolean
  {
    if((username==='') || (email==='') || (password==='') )
    {
      console.log('Register Validation : ' +this.isRegisterValidated);
      console.log('Email: ' +email);
      console.log('Password: ' +password);
      this.isRegisterValidated=false;
    }
  
    else
    {
      this.isRegisterValidated=true;
      console.log('Register Validation : ' +this.isRegisterValidated);
    }
    return this.isRegisterValidated;
  }
}
