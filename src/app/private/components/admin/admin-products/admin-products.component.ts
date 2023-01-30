import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from 'src/app/shared/services/database/product.service';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products?: Product[];
  filteredProducts?: Product[];
  subscriptions?: Subscription;

  displayedColumns: string[] = ['title', 'category', 'price', 'edit'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscriptions = this.productService
      .getProducts()
      .subscribe((products) => {
        this.products = this.filteredProducts = products;
        this.dataSource = new MatTableDataSource(
          products.map((product) => {
            const { imageUrl, ...rest } = product;
            return rest as Product;
          })
        );
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return (
            data.title.toLowerCase().includes(filter) ||
            data.category.toLowerCase().includes(filter)
          );
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
