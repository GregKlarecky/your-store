import { Component, OnInit } from "@angular/core";
import { productList } from "../subcategory/product-list.helper";
import { IProduct } from "src/interfaces/product.interface";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  cartItems: IProduct[];
  productList: IProduct[] = productList;

  constructor() {}

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList() {
    this.cartItems = this.productList.slice(0, 5);
  }

  get totalCost(): number {
    return this.cartItems
      .map(item => item.price)
      .reduce((acc, cur): number => acc + cur);
  }
}
