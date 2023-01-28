import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/database/category.service';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
})
export class ProductsFilterComponent implements OnInit {
  categories$?: Observable<Category[]>;
  @Input('category') category?: string | null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }
}
