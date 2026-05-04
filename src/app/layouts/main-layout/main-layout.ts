import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DarkMode } from "../../directives/dark-mode";
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {



}
