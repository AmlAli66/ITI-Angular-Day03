import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProduct {

  product: Product = {
    title: '',
    description: '',
    category: '',
    price: 0,
    thumbnail: '',
    stock: 0
  };

  isEditMode = false;
  productId!: number;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.isEditMode = true;
        this.productId = +id;

        this.productService.getProductById(this.productId).subscribe(res => {
          this.product = { ...res };
          this.cdr.markForCheck();
        });
      }
    });
  }

  submit() {

    if (this.isEditMode) {

      this.productService.updateProduct(this.productId, this.product)
        .subscribe(() => {
          alert('Product Updated!');
          this.router.navigate(['/home']);
        });

    } else {

      this.productService.addProduct(this.product)
        .subscribe(() => {
          alert('Product Added!');
          this.resetForm();
          this.router.navigate(['/home']);
        });

    }

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
