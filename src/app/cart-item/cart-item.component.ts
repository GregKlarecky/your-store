import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICartItem } from "src/interfaces/cart-item.interface";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"]
})
export class CartItemComponent implements OnInit {
  @Input() item: ICartItem;
  @Input() counter: boolean = true;
  @Output() itemsChange: EventEmitter<ICartItem[]> = new EventEmitter();
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAdd(item, amount, size) {
    this.cartService.addToCart(item, amount, size, false);
    this.itemsChange.next(this.cartService.getItems());
  }
  onSubtract(item, amount, size) {
    this.cartService.subtractFromCart(item, amount, size);
    this.itemsChange.next(this.cartService.getItems());
  }
}
