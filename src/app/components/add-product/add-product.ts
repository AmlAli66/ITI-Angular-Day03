import { Component } from '@angular/core';
import { ProductsService } from '../../services/products';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  product: Product = {
    // id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    thumbnail: '',
    stock: 0
  };

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  submit() {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product Added!');
      this.resetForm();

      this.router.navigate(['/home']);
    });
  }

  resetForm() {
    this.product = {
      // id: 0,
      title: '',
      description: '',
      category: '',
      price: 0,
      thumbnail: '',
      stock: 0
    };
  }

}
