import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
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
