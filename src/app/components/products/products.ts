import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products';
import { ShortDescPipe } from '../../pipes/short-desc-pipe';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Zoom } from '../../directives/zoom';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ShortDescPipe, Zoom, Button],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  categories: string[] = [];

  filteredProducts: Product[] = [];

  totalPrice: number = 0;

  selectedCategory: string = 'all';

  @Output() dataLoaded = new EventEmitter<any>();


  constructor(private productService: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res as any;
      this.filteredProducts = this.products;

      this.categories = [
        'all',
        ...new Set(this.products.map(p => p.category))
      ];


      this.calculateTotal();

      this.dataLoaded.emit({
        categories: this.categories,
        totalPrice: this.totalPrice
      });

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

  deleteItem(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
      this.filterCategory(this.selectedCategory);
      alert('Deleted Successfully');
    });
  }

}
