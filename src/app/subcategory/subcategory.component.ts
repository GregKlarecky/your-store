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
  public categoryId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCategoryId();
  }

  getProductListByCategory() {
    this.productListByCategory = this.productList.filter(product => {
      return product.category_id === parseInt(this.categoryId, 10);
    });
  }

  getCategoryId() {
    this.route.paramMap.subscribe(paramMap => {
      this.categoryId = paramMap.get("id");
      this.getProductListByCategory();
    });
  }

  // ifSameSKu() {
  //   this.productList.forEach(product => {
  //     const results = this.productList.filter(item => product.sku === item.sku);
  //     if (results.length >= 2) {
  //       console.log(results);
  //     }
  //   });
  // }
}
