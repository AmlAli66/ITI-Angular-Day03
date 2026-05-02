import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products';
import { ShortDescPipe } from '../../pipes/short-desc-pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Zoom } from '../../directives/zoom';
import { DarkMode } from '../../directives/dark-mode';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ShortDescPipe, Zoom, DarkMode, TitleCasePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  categories: string[] = [];

  filteredProducts: Product[] = [];

  totalPrice: number = 0;

  selectedCategory: string = 'all';

  constructor(private productService: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
      this.filteredProducts = this.products;

      this.categories = [
        'all',
        ...new Set(this.products.map(p => p.category))
      ];


      this.calculateTotal();

      this.cdr.detectChanges();
    });
  }

  calculateTotal() {
    this.totalPrice = this.filteredProducts.reduce(
      (sum, item) => sum + item.price, 0
    );
  }

  filterCategory(cat: string) {

    this.selectedCategory = cat;

    if (cat === 'all') {
      // this.filteredProducts = this.products;
      this.filteredProducts = [...this.products];

    } else {
      this.filteredProducts =
        this.products.filter(p => p.category === cat);
    }

    this.calculateTotal();
  }

  addToCart(item: Product) {
    if (item.stock > 0) {
      item.stock--;
      this.calculateTotal();
    }

  }
}
