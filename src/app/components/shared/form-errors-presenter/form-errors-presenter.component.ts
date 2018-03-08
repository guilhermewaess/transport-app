import { Component, Input } from '@angular/core';
import formErrorsResolver from './formErrorsResolver';

@Component({
  selector: 'form-errors-presenter',
  templateUrl: './form-errors-presenter.component.html',
  styleUrls: ['./form-errors-presenter.component.scss']
})
export class FormErrorsPresenterComponent {

  @Input() field;

  constructor() { }

  getErrors() {
    return Object.keys(this.field.errors);
  }

  getErrorMessage(errorType) {
    const error = formErrorsResolver.get(errorType);
    return error(this.field.errors[errorType]);
  }

  hasErrors() {
    return this.field.invalid && this.field.touched;
  }

}
