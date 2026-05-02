import { Component, ViewChild } from '@angular/core';
import { Products } from '../products/products';
import { Button } from "../../shared/button/button";
import { TitleCasePipe } from '@angular/common';
import { DarkMode } from '../../directives/dark-mode';

@Component({
  selector: 'app-products-parent',
  imports: [Button, TitleCasePipe, Products, DarkMode],
  templateUrl: './products-parent.html',
  styleUrl: './products-parent.css',
})
export class ProductsParent {

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


}
