import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from '../../shared/services/database/category.service';
import { ProductService } from '../../shared/services/database/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnDestroy {
  products?: Product[];
  filteredProducts?: Product[];
  subscriptions: Subscription;

  constructor(private productService: ProductService) {
    this.subscriptions = this.productService.getAll().subscribe((products) => {
      this.products = this.filteredProducts = products;
    });
  }
  //
  filter(query: string) {
    this.filteredProducts = query
      ? this.products?.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
