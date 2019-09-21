import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "src/app/services/categories.service";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-subcategory",
  templateUrl: "./subcategory.component.html",
  styleUrls: ["./subcategory.component.scss"]
})
export class SubcategoryComponent implements OnInit {
  public productList: IProduct[];
  public categoryId: number;
  public minPrice: number = 0;
  public maxPrice: number = 100;
  public ifShoeCategory: boolean;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCategoryIdAndProductList();
    this.checkIfShoeCategory();
  }

  getCategoryIdAndProductList() {
    this.route.paramMap.subscribe(paramMap => {
      this.categoryId = parseInt(paramMap.get("id"), 10);
      this.checkIfShoeCategory();
      if (this.categoryId === 11) {
        this.productList = this.productsService.getProductsByName("bag");
      } else {
        this.getProductList();
      }
    });
  }

  getProductList() {
    this.productList = this.productsService.getProductListByCategoryIdAndFilters(
      this.categoryId,
      this.minPrice,
      this.maxPrice
    );
  }

  filterByPrice($event) {
    this.minPrice = $event.min;
    this.maxPrice = $event.max;
    this.getProductList();
  }

  checkIfShoeCategory() {
    const parent = this.categoriesService.getCategoryParentByChildId(
      this.categoryId
    );
    this.ifShoeCategory = parent.name === "shoes";
  }
}
