import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

export function EmailValidator(confirmEmailInput: string) {
  let confirmEmailControl: FormControl;
  let emailControl: FormControl;

  return (control: FormControl) => {
    if (!control.parent) {
      return null;
    }

    if (!confirmEmailControl) {
      confirmEmailControl = control;
      emailControl = control.parent.get(confirmEmailInput) as FormControl;
      emailControl.valueChanges.subscribe(() => {
        confirmEmailControl.updateValueAndValidity();
      });
    }

    if (
      emailControl.value.toLocaleLowerCase() !==
      confirmEmailControl.value.toLocaleLowerCase()
    ) {
      return {
        notMatch: true
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  private formPayment: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  onSubmitForm() {
    console.log(this.formPayment.value);
  }

  ngOnInit() {
    this.createFormPayment();
  }

  createFormPayment() {
    this.formPayment = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.email, Validators.required, EmailValidator('email')]],
      phone: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

}
