import { Component, ViewChild } from '@angular/core';
import { Products } from '../products/products';
import { Button } from "../../shared/button/button";
import { TitleCasePipe } from '@angular/common';
import { DarkMode } from '../../directives/dark-mode';
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../../services/auth/services/auth';

@Component({
  selector: 'app-products-parent',
  imports: [Button, TitleCasePipe, Products],
  templateUrl: './products-parent.html',
  styleUrl: './products-parent.css',
})
export class ProductsParent {

  constructor(private router: Router, private auth: Auth) { }
  @ViewChild(Products) productsComponent!: Products;

  categories: string[] = [];
  totalPrice: number = 0;
  selectedCategory = 'all';

  filter(cat: string) {

    this.selectedCategory = cat;

    this.productsComponent.filterCategory(cat);

    this.totalPrice = this.productsComponent.totalPrice;
  }

  receiveData(data: any) {
    this.categories = data.categories;
    this.totalPrice = data.totalPrice;
  }

  goToAdd() {
    if (this.auth.isAdmin()) {
      this.router.navigate(['/add-product']);
    } else {
      alert('Access Denied! Admins Only.');
    }
  }
}
