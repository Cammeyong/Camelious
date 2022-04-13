import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password : new FormControl('', Validators.required),
      userName: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

}
