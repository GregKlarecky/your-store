import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "./product-list.helper";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subcategory",
  templateUrl: "./subcategory.component.html",
  styleUrls: ["./subcategory.component.scss"]
})
export class SubcategoryComponent implements OnInit {
  productList: IProduct[] = productList;
  productListByCategory: IProduct[];
  public categoryId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCategoryIdAndProductList();
  }

  getProductListByCategoryId() {
    this.productListByCategory = this.productList.filter(product => {
      return product.category_id === this.categoryId;
    });
  }

  getCategoryIdAndProductList() {
    this.route.paramMap.subscribe(paramMap => {
      this.categoryId = parseInt(paramMap.get("id"), 10);
      if (this.categoryId === 11) {
        this.getProductsByName("bag");
      } else {
        this.getProductListByCategoryId();
      }
    });
  }

  getProductsByName(name: string) {
    this.productListByCategory = this.productList.filter(product => {
      return product.name === name;
    });
  }
}
