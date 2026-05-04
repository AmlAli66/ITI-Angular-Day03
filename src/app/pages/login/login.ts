import { Component } from '@angular/core';
import { Auth } from '../../services/auth/services/auth';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  submit() {
    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;

      this.auth.login(email!, password!).subscribe(res => {

        if (res.length > 0) {
          this.auth.saveUser(res[0]);
          this.router.navigate(['/home']);
        } else {
          alert('Invalid email or password');
        }



      });

    }
  }

}
