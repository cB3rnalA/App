import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(correo:string,contrasena:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(correo,contrasena);
  }

  async loginUser(correo:string, contrasena:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(correo,contrasena);
  }

  async resetPassword(correo:string){
    return await this.ngFireAuth.sendPasswordResetEmail(correo);
  }

  async signOut(){
    return await this.ngFireAuth.signOut();
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser;
  }

  async getName(){
    return await this.ngFireAuth.name;
  }
}
