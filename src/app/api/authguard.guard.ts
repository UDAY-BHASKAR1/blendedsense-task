import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  dataItem:any={}
  
  constructor(private rtr:Router,private toastr:ToastrService){}
  

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      if(localStorage.getItem('token')== null){
        // this.toastr.error("Please Provide Login Credentials",null, { timeOut: 2000 });
        this.rtr.navigate(['/login']);
      return false;
    }
    else{
    
      return true;
    }
  }
  
}}
