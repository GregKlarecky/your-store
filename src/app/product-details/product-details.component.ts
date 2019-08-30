import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  sizes: number[] = [42, 43, 44, 45, 46, 47];
  productList: IProduct[] = productList;
  product: IProduct;
  sizesClicked: boolean = false;
  sizesOpened: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getProductSku();
  }

  getProductSku() {
    this.route.paramMap.subscribe(paramMap => {
      const sku = paramMap.get("sku");
      this.product = this.productList.find(product => {
        return product.sku === sku;
      });
      console.log(this.product);
    });
  }

  openSizes() {
    this.sizesClicked = true;
    this.sizesOpened = !this.sizesOpened;
  }
}
