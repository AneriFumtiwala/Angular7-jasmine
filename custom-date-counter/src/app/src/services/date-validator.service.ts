import { FormControl } from '@angular/forms';
import moment from "moment";

export class DateValidatorService {

  constructor() { }

  // function: date validator handler
  static dateValidator(control) {
    const val = moment(control.value, "DD/MM/YYYY", true);
    if (!val.isValid()) {
      return { invalidDate: true };
    }
    return null;
  }
}
