import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router,
              private loginService: LoginService,
              private toastrService: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
        '';
  }
  ngOnInit(): void {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  login(myForm: User) {
    if (this.loginService.validateUser(myForm)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('USERNAME', myForm.username);
      this.route.navigate(['/dashboard']);
      this.toastrService.success('Logged in successfully!', 'NAGP-PRACTICE-PORTAL');
    }
    else {
      this.toastrService.warning('Please enter valid credentials!', 'NAGP-PRACTICE-PORTAL');
    }
  }

  resetForm() {
    this.loginForm.reset();
  }

}
