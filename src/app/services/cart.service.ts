import { Injectable } from "@angular/core";
import { CartState } from "../store/reducers/cart.reducers";
import { Store } from "@ngrx/store";
import * as fromCart from "../store/actions/cart.actions";
import { IProduct } from "src/interfaces/product.interface";
import { ICartItem } from "src/interfaces/cart-item.interface";

@Injectable({
  providedIn: "root"
})
export class CartService {
  public items: ICartItem[];
  public orderline: number = 0;

  constructor(private store: Store<CartState>) {
    this.items = this.getCartFromLocalStorage();
  }

  public addToCart(
    item: IProduct,
    amount: number = 1,
    size: number | string
  ): void {
    if (size === "Wybierz") {
      alert("Wybierz rozmiar!");
      return;
    }

    item = this.stampProduct(item, size);
    const oldProduct = this.searchForProduct((item as ICartItem).cartId);

    if (oldProduct) {
      this.mergeItems(oldProduct, amount, size);
      return;
    }
    this.items.push({ ...item, amount, size });
    this.saveCartInLocalStorage();
    this.sortItems();
  }

  public searchForProduct(cartId: string): ICartItem {
    return this.items.find(product => product.cartId === cartId);
  }

  public deleteProduct(cartId: string): void {
    this.items = this.items.filter(product => {
      return product.cartId !== cartId;
    });
    this.saveCartInLocalStorage();
  }

  public mergeItems(oldProduct: ICartItem, amount, size): void {
    const totalAmount = oldProduct.amount + amount;
    this.deleteProduct(oldProduct.cartId);
    this.addToCart(oldProduct, totalAmount, size);
  }

  public stampProduct(product: IProduct, size) {
    product["cartId"] = product.sku + size.toString();
    product["orderline"] = this.orderline++;
    return product;
  }

  public getItems() {
    console.log(this.items);
    return this.items ? this.items.slice(0) : [];
  }

  public sortItems() {
    return this.items.sort((a, b) => a.timeStamp - b.timeStamp);
  }

  public subtractFromCart(
    item: IProduct,
    amount: number,
    size: number | string
  ): void {
    item = this.stampProduct(item, size);
    const product = this.searchForProduct((item as ICartItem).cartId);
    if (product) {
      const index = this.items.indexOf(product);
      if (product.amount > 1) {
        product.amount = product.amount - amount;
        this.items.splice(index, 1, product);
        this.saveCartInLocalStorage();
        return;
      }
      this.deleteProduct(product.cartId);
    }
  }

  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  getCartFromLocalStorage() {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  }
}
