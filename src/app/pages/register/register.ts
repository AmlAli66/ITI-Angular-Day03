import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private auth: Auth, private router: Router) { }

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  submit() {
    if (this.registerForm.valid) {

      this.auth.register(this.registerForm.value as any).subscribe(() => {
        alert('Account created!');
        this.router.navigate(['/login']);
      });

    }

  }

}
