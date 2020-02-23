import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, 
    private router:Router) {
    this.loginForm = this.formBuilder.group({
      'email': [''],
      'password': ['']
    })
   }

  ngOnInit() {
  }

  logForm() {
    console.log(this.loginForm.value)
  }

  sednForm() {
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      this.authService.saveToken(data['token']);
      this.router.navigate(['user/2'])
    })
  }

}
