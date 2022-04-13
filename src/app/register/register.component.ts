import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      passwordConfirmed : new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required, Validators.maxLength(16)])
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
    console.log(this.registerForm.value)
    alert("Welcome!!! We have sent you a link in your email. Please Validate your email to proceed")
    } else {
      alert("Please complete the form to proceed")
      console.log("form not valid")
    }
  }


}
