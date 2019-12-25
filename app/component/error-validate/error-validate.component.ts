import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('control') control;

  constructor() { }

  get message() {
    for (const err in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  getErrorMessage(err, value) {
    const messages = {
      required: 'Required',
      minlength: `Minlength : ${value.requiredLength} character`,
      maxlength: `Maxlength : ${value.requiredLength} character`,
      email: `Email is required`,
      EmailValidator: `ok`
    };
    return messages[err];
  }

  ngOnInit() {
  }

}
