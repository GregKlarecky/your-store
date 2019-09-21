import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-order-complete",
  templateUrl: "./order-complete.component.html",
  styleUrls: ["./order-complete.component.scss"]
})
export class OrderCompleteComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.clearLocalStorage();
    this.cartService.emptyCart();
  }
}
