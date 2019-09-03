import { Component, OnInit } from "@angular/core";
import { productList } from "../subcategory/product-list.helper";
import { IProduct } from "src/interfaces/product.interface";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  cartItems: IProduct[];
  productList: IProduct[] = productList;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  get totalCost(): number {
    return this.cartItems
      .map(item => item.price)
      .reduce((acc, cur): number => acc + cur);
  }
}
