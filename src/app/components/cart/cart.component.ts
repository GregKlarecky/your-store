import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";
import { ICartItem } from "src/interfaces/cart-item.interface";
import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from "@angular/animations";
import { CartService } from "src/app/services/cart.service";
import { FooterService } from "src/app/services/footer.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
  animations: [
    trigger("removeItem", [
      transition(":leave", [
        style({ opacity: 1 }),
        animate(
          "1s cubic-bezier(0.35, 0, 0.25, 1)",
          keyframes([
            style({ opacity: 0, offset: 0.5 }),
            style({ opacity: 0, height: 0, offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: ICartItem[];
  productList: IProduct[] = productList;

  constructor(
    private cartService: CartService,
    private footerService: FooterService
  ) {}

  ngOnInit() {
    this.getShoppingList();
    this.footerService.showFooter.next(false);
  }

  getShoppingList() {
    this.cartItems = this.cartService.getItems();
  }

  trackByFn(orderlist, item) {
    return item.orderline;
  }

  onItemsChange($event) {
    this.cartItems = $event;
  }

  ngOnDestroy() {
    this.footerService.showFooter.next(true);
  }
}
