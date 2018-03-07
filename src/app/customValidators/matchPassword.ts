import { AbstractControl, Validator, FormControl } from '@angular/forms';

export function matchFields(fieldToCompare: string) {
  return (control: AbstractControl) => {
    debugger;


    return { matchFields: {} }
  }
}

export function matchPassword(abstractControl: AbstractControl) {
  let password = abstractControl.get('password').value;
  let confirmPassword = abstractControl.get('confirmPassword').value;

  if (password !== confirmPassword) {
    abstractControl.get('confirmPassword').setErrors({ MatchPassword: true });
  }

  return null;
}

export class CustomValidators {

  static matchFields(fieldToCompareValue) {
    return function (abstractControl: AbstractControl) {
      let fieldValue = abstractControl.value;

      if (fieldToCompareValue !== fieldValue) {
        return { 'matchFields': 'Erro' }
      }

      return null;
    }

  }
}


// static matchFields(fieldToCompare) {
//   return function (abstractControl: AbstractControl) {
//     let fieldToCompareValue = abstractControl.get(fieldToCompare).value;
//     let fieldValue = abstractControl.get(field).value;

//     if (fieldToCompareValue !== fieldValue) {
//       return { 'matchFields': { fieldToCompare, field } }
//     }

//     return null;
//   }

// }