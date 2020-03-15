import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  constructor(private _fb: FormBuilder) { }

  registrationForm = this._fb.group({
    userName: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    address: this._fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  // registrationForm = new FormGroup({
  //   userName: new FormControl('vzan2012'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData() {
    // this.registrationForm.setValue({
    //   userName: 'vzan2012',
    //   password: 123456,
    //   confirmPassword: 123456,
    //   address: {
    //     city: 'Paris',
    //     state: 'Ile-de-France',
    //     postalCode: 94230
    //   }
    // })

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
