import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticateService } from '../../services/authenticate.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  email: string;
  password: string;

  facebookProvider = new firebase.auth.FacebookAuthProvider();
  googleProvider = new firebase.auth.GoogleAuthProvider();

  constructor(private auth: AuthenticateService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.email]),
      'password': new FormControl(this.password, [Validators.required, Validators.minLength(4)]),
    })
  }

  login() {
    this.auth.login(this.email, this.password);
  };

  loginWithProvider(provider) {
    this.auth.loginWithProvider(provider)
  }



}
