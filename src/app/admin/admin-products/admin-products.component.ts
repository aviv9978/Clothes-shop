import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/database/category.service';
import { ProductService } from '../../shared/services/database/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  products$: any;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }


}
