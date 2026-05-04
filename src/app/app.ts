import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { ProductsParent } from "./components/products-parent/products-parent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Products');
}
