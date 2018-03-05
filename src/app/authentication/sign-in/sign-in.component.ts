import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = {
    username: null,
    password: null
  }

  constructor(public afAuth: AngularFireAuth, private auth: AuthenticateService) {}

  ngOnInit() {
    
  }
  
  login() {
    this.auth.login(this.user.username, this.user.password)
  };

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (res) => {
        // TODO: After user succefully login, save data received from facebook into firebase store
        console.log(res)
      }
    ).catch(
      (error) => {
        // TODO: handle errors
        console.log(error)
      }
    );
  }

  

}
