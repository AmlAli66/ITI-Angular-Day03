import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DarkMode } from '../../directives/dark-mode';
import { Auth } from '../../services/auth/services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, DarkMode],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private auth: Auth, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
