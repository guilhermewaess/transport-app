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

  facebookProvider = new firebase.auth.FacebookAuthProvider();
  googleProvider = new firebase.auth.GoogleAuthProvider();

  constructor(public afAuth: AngularFireAuth, private auth: AuthenticateService) {}

  ngOnInit() {
    
  }
  
  login() {
    this.auth.login(this.user.username, this.user.password);
  };

  loginWithProvider(provider) {
    this.auth.loginWithProvider(provider)
  }

  

}
