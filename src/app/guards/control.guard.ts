import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ControlGuard implements CanActivate {

  constructor(private storage: Storage, router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.permitirAcesso();
    }
  
    async permitirAcesso() {
      if (await this.storage.get("sesion") == 1) {
        console.log("true 1");
        return true;
      }
      else if(await this.storage.get("sesion") == 2){
        console.log("true 2");
        return true;
      }
      else{
        console.log("false");
        return false;
      }
    }
  }
