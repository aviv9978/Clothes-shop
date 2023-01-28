import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/database/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category?: string | null ;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}
  ngOnInit(): void {
    this.placeProducts();
  }

  private placeProducts() {
    this.productService
      .getProducts()
      .pipe(
        switchMap((products) => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
