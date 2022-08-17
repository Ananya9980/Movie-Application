import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  //  private url="http://localhost:8083/api/u2/register";
 
//   private otherurl="http://localhost:8086/api/u1/movies";

//   private loginurl="http://localhost:8083/api/u2/login";

  // private gettingdataurl="http://localhost:8086/api/u1/movies";
  
     constructor(private httpclient:HttpClient) { }

  // saveuser(formdetails:any):Observable<any>{
  //   return this.httpclient.post(`${this.url}`,formdetails);
 // }
  // savetomongo(formdetails:any):Observable<any>{
  //   return this.httpclient.post(`${this.otherurl}`,formdetails);
  // }

  // loginuser(formdata:any):Observable<any>
  // {
  //   return this.httpclient.post(`${this.loginurl}`,formdata);
  // }

//  result:any;
//   guard(result:boolean)
//   {
// this.result=result;
//   }
//   email:any;
//   retrivemail(email:any)
//   {
//      this.email=email;
//   }

//   getdata():Observable<any>
//   {
//    var moviedataurl= this.gettingdataurl.concat(this.email);
//    console.log(moviedataurl);
//      return this.httpclient.get(`${moviedataurl}`);
//   }

  // register():Observable<any>
  // {
  //   var userdata=this.url
  //   console.log(userdata);
  //   return this.httpclient.get(`${userdata}`)
  // }
  
}
