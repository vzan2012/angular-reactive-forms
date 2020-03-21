import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  ngOnInit() {
    this.registrationForm = this._fb.group({
      userName: ['', [Validators.required, Validators.minLength(6), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      address: this._fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, { validator: PasswordValidator });


    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');

      if (checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
  }

  constructor(private _fb: FormBuilder) { }



  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'vzan2012',
      password: 123456,
      confirmPassword: 123456,
      address: {
        city: 'Paris',
        state: 'Ile-de-France',
        postalCode: 94230
      }
    })
  }

}
