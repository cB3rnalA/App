import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UtilsService } from '../services/utils.service';
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  firebaseSvc = inject(AuthenticationService);
  utilSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve) => {


      this.firebaseSvc.getAuth().onAuthStateChanged((auth) => {
        
        if (!auth)  resolve(true);
        
        else{
          this.utilSvc.routerLink('/home');
          resolve(false);
        }
      })
    });
  }

}
