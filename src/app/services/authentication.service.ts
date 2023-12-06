import { Injectable,inject } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth = inject(AngularFireAuth);

  //=====================autenticacion=====================

  //============acceder=============
  signIn(user:User){
    return signInWithEmailAndPassword(getAuth(),user.correo,user.contrasena);
  }

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
    return this.Firestore.collection('alumnos').add(dato);
  }//alumnos es el nombre de la tabla
}
