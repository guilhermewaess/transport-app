import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchPassword } from '../../customValidators/matchPassword';
import { CustomValidators } from '../../customValidators/matchPassword';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }


  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        'fullName': new FormControl(this.user.fullName, [Validators.minLength(10)]),
        'email': new FormControl(this.user.email, [Validators.email]),
        'password': new FormControl(this.user.password, [Validators.required]),
        'confirmPassword': new FormControl(this.user.confirmPassword, [CustomValidators.matchFields(this.signUpForm)]),
      },
      // { validators: CustomValidators.matchFields('password', 'confirmPassword') }
    );
  }

}
