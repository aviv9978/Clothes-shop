import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/database/category.service';
import { ProductService } from 'src/app/shared/services/database/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) 
  {
    this.categories$ = categoryService.getCategories();
  }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
