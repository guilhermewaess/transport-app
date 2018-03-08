import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../../customValidators/CustomValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm: FormGroup;
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.signUpForm = this.formBuilder.group({
      fullName: [this.user.fullName, [Validators.required]],
      email: [this.user.email, [Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: [this.user.password, [Validators.required]],
          confirmPassword: [this.user.confirmPassword],
        },
        { validator: CustomValidators.groupMatch(['Password', 'Confirm Password']) }
      )
    })
  }

  signUp() {
  }
}
