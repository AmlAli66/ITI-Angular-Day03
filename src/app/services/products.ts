import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  // GET ALL
  getProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // GET BY ID
  getProductById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // ADD
  addProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // UPDATE
  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  // DELETE
  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
