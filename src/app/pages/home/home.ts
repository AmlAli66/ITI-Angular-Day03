import { Component } from '@angular/core';
import { ProductsParent } from "../../components/products-parent/products-parent";

@Component({
  selector: 'app-home',
  imports: [ProductsParent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
