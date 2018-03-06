import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

export interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  uid: string;
}

@Injectable()
export class AuthenticateService {

  user: Observable<firebase.User>;

  private userDoc: AngularFirestoreDocument<User>;

  constructor(private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore) { 
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return response
      })
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  loginWithProvider(provider) {
    return this.firebaseAuth
      .auth
      .signInWithPopup(provider)
      .then(res => {
        this.storeLoginProvidedData(res.user);
      })
  }

  storeLoginProvidedData(data) {
    const userObj = {
      displayName: data.displayName,
      email: data.email,
      emailVerified: data.emailVerified,
      uid: data.uid
    }
    this.userDoc = this.firestore.doc<User>(`users/${userObj.uid}`);
    this.userDoc.set(userObj);
  };
  
  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }

}
