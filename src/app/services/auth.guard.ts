import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  admindata: any=null
  clientdata: any=null
  freelancerdata: any=null
  constructor(private authService: UsersService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.admindata = sessionStorage.getItem('admindata');
    this.clientdata = sessionStorage.getItem('clientdata');
    this.freelancerdata = sessionStorage.getItem('freelancerdata');
		if (this.admindata != null || this.clientdata != null || this.freelancerdata != null)
      return true;
    else
      this.router.navigate(['/']);
    return false;
  }

}
