import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private myhttp:HttpClient) { }
 
  public registerUser(user:User):Observable<any>{
    //movie service will save data in mongo from there some data will go to mysql
    return this.myhttp.post<any>("http://localhost:8086/api/u1/movies",user)
  }

  public loginUser(user:User):Observable<any>{
    return this.myhttp.post<any>("http://localhost:8083/api/u2/login",user)
  }

  getMovieListFromRemote():Observable<any>{
    return this.myhttp.get<any>("http://localhost:8086/api/u1/user/movies");
  }
 
 
 
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
