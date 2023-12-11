import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);
  modalCtrl = inject(ModalController);


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

  // ================ Modal ==========================
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any){
    return this.modalCtrl.dismiss(data);
  }
}
