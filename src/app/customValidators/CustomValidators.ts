import { AbstractControl, Validator, FormControl, FormGroup } from '@angular/forms';

export class CustomValidators {

  static groupMatch(friendlyFieldNames?: string[]) {
    return ({ value, touched }) => {
      const [first, ...rest] = Object.keys(value || {});
      const isValid = rest.every(v => value[first] === value[v]);

      if (isValid && touched) {
        return null;
      }

      const fieldNames = friendlyFieldNames || [first, ...rest];
      return {
        groupMatch: {
          fields: fieldNames.toString().replace(/\,/, ', ')
        }
      };
    }
  }
}