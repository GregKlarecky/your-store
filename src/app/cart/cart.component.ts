import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";
import { CartService } from "../services/cart.service";
import { ICartItem } from "src/interfaces/cart-item.interface";
import { FooterService } from "../services/footer.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
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

  get totalCost(): number {
    return this.cartItems.length
      ? this.cartItems
          .map(item => item.price * item.amount)
          .reduce((acc, cur): number => acc + cur)
      : 0;
  }

  onAdd(item, amount, size) {
    this.cartService.addToCart(item, amount, size);
    this.cartItems = this.cartService.getItems();
  }
  onSubtract(item, amount, size) {
    this.cartService.subtractFromCart(item, amount, size);
    this.cartItems = this.cartService.getItems();
  }

  trackByFn(orderlist, item) {
    return item.orderline;
  }

  ngOnDestroy() {
    this.footerService.showFooter.next(true);
  }
}
