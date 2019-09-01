import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartItems: IProduct[];
  productList: IProduct[] = productList;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList() {
    this.cartItems = this.cartService.getItems();
  }

  get totalCost(): number {
    return this.cartItems.length
      ? this.cartItems
          .map(item => item.price)
          .reduce((acc, cur): number => acc + cur)
      : 0;
  }
}
