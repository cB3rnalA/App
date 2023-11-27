import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, updateProfile } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth, public Firestore: AngularFirestore) { }

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

  async updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
  }

  enviarDatos(dato : any){
    return this.Firestore.collection('prueba').add(dato);
  }//prueba es el nombre de la tabla
}
