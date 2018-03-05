import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticateService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) { 
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
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
