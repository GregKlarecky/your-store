import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { IAddress } from "src/interfaces/address.interface";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  cartItems: IProduct[];
  address: IAddress;
  delivery: string;
  payment: string;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.address = this.cartService.getAddress();
    this.delivery = this.cartService.getDeliveryAndPayment().deliveryInput;
    this.payment = this.cartService.getDeliveryAndPayment().paymentInput;
  }

  get totalCost(): number {
    return this.cartItems
      .map(item => item.price)
      .reduce((acc, cur): number => acc + cur);
  }
}
