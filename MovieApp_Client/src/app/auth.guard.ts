import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private service:LoginServiceService){}

  canActivate()
  {
     
      let status=false;
      if(sessionStorage.getItem('token')!=null)
      {
       status=true;
      }
      else{
        this.service.goToLoginWhenGuardFailed();
        status=false;
      }
    return status;
  
  
}
  
  
}
