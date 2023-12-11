import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);


  // ================== LOADING ==================
  loading() {
    return this.loadingCtrl.create({ spinner: 'circles' })
  }

  // ================== Toast ====================
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // ============== Enrutar a cualquier pag disp ==============
  routerLink(url: string) {
    this.router.navigateByUrl(url);
  }

  // ============== Guardar en local storage =============
  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  // ================Obtener de local storage ==========================
  getFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key))
  }


}
