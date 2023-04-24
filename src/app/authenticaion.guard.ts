import { AuthGuardService } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticaionGuard implements CanActivate {
  constructor(private Authguardservice: AuthGuardService, private router:Router){

  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate () :boolean{
    if (!this.Authguardservice.gettoken()) {  
     this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken();  
  }
}
