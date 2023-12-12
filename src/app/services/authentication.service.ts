import { Injectable, inject } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../interfaces/user';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection , collectionData , query} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);

  //=====================autenticacion=====================

  getAuth() {
    return getAuth();
  }



  //============acceder=============
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //============Crear Usuario=============
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //============Actualizar Usuario=============
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //=========== Enviar email para restablecer contraseña =========

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email)
  }

  //======== cerrar sesion ==========
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/login')
  }


  // ================ Base de datos ===============

  // ======== obtener docs de una colleccion ========
  getCollectionData(path: string, collectionQuery?:any){
    const ref = collection(getFirestore(),path);
    return collectionData(query(ref, collectionQuery), {idField: 'id'});
  }


  // ============ setear un documento =======
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  // ============ obtener un documento =======
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  // ==================== Add document ==============
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }




  //============== almacenamiento ===========



  constructor(public ngFireAuth: AngularFireAuth, public Firestore: AngularFirestore) { }



  async getProfile() {
    return await this.ngFireAuth.currentUser;
  }


  enviarDatos(dato: any) {
    return this.Firestore.collection('alumnos').add(dato);
  }//alumnos es el nombre de la tabla
}
