import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/services/database/category.service';
import { ProductService } from 'src/app/shared/services/database/product.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  categories$;
  product: Product | any = [];
  id: string | null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService
        .getProduct(this.id)
        .valueChanges()
        .pipe(take(1))
        .subscribe((p) => (this.product = p!));
  }

  save(product: any) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.router.navigate(['/admin/products']);
    this.productService.delete(this.id!);
  }
}
