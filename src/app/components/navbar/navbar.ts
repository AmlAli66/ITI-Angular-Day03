import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkMode } from '../../directives/dark-mode';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, DarkMode],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar { }
