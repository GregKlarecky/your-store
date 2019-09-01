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
  public orderline: number;

  constructor(private store: Store<CartState>) {
    this.orderline = this.getOrdelineFromlocalStorage();
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
    this.sortItems();
    this.saveCartInLocalStorage();
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
    if ((product as ICartItem).orderline) {
      product["orderline"] = (product as ICartItem).orderline;
    } else {
      product["orderline"] = this.orderline++;
      this.saveLastOrderlineInLocalStorage();
    }
    return product;
  }

  public getItems() {
    console.log(this.items.map(item => item.orderline));
    return this.items ? this.items.slice(0) : [];
  }

  public sortItems() {
    this.items = this.items.sort((a, b) => a.orderline - b.orderline);
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
        this.sortItems();
        this.saveCartInLocalStorage();
        return;
      }
      this.deleteProduct(product.cartId);
      this.sortItems();
      this.saveCartInLocalStorage();
    }
  }

  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  getCartFromLocalStorage() {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  }

  saveLastOrderlineInLocalStorage() {
    localStorage.setItem("caartId", JSON.stringify(this.orderline));
  }

  getOrdelineFromlocalStorage() {
    let orderline = +JSON.parse(localStorage.getItem("caartId"));
    return orderline ? ++orderline : 0;
  }
}
