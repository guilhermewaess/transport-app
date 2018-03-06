import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticateService } from '../../services/authenticate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  formData: any;
  username: string;
  password: string;
  alertInfo: 'This field is required';

  facebookProvider = new firebase.auth.FacebookAuthProvider();
  googleProvider = new firebase.auth.GoogleAuthProvider();

  constructor(public afAuth: AngularFireAuth, private auth: AuthenticateService, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ngOnInit() {
    
  }
  
  login() {
    this.auth.login(this.username, this.password);
  };

  loginWithProvider(provider) {
    this.auth.loginWithProvider(provider)
  }

  

}
