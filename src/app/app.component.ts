import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  registrationForm = new FormGroup({
    userName: new FormControl('vzan2012'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

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
