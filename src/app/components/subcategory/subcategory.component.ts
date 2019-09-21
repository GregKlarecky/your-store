import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "src/app/services/categories.service";

@Component({
  selector: "app-subcategory",
  templateUrl: "./subcategory.component.html",
  styleUrls: ["./subcategory.component.scss"]
})
export class SubcategoryComponent implements OnInit {
  public productList: IProduct[];
  public categoryId: number;
  public ifShoeCategory: boolean;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
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
        this.productList = this.categoriesService.getProductsByName("bag");
      } else {
        this.productList = this.categoriesService.getProductListByCategoryId(
          this.categoryId
        );
      }
    });
  }

  checkIfShoeCategory() {
    const parent = this.categoriesService.getCategoryParentByChildId(
      this.categoryId
    );
    this.ifShoeCategory = parent.name === "shoes";
  }
}
