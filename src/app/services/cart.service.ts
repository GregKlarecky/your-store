import { Injectable } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { ICartItem } from "src/interfaces/cart-item.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";
import { CustomModalService } from "./custom-modal.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  public items: ICartItem[];
  public orderline: number;

  constructor(
    private modalService: NgbModal,
    private customModalService: CustomModalService
  ) {
    this.orderline = this.getOrdelineFromlocalStorage();
    this.items = this.getCartFromLocalStorage();
    // this.openModal();
  }

  public addToCart(
    item: IProduct,
    amount: number = 1,
    size: number | string,
    showModal: boolean = true
  ): void {
    item = this.stampProduct(item, size);
    const oldProduct = this.searchForProduct((item as ICartItem).cartId);

    if (oldProduct) {
      this.mergeItems(oldProduct, amount, size, showModal);
      return;
    }
    const product = { ...item, amount, size };
    this.items.push(product);
    if (showModal) {
      this.openModal(product);
    }
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

  public mergeItems(
    oldProduct: ICartItem,
    amount,
    size,
    showModal: boolean
  ): void {
    const totalAmount = oldProduct.amount + amount;
    this.deleteProduct(oldProduct.cartId);
    this.addToCart(oldProduct, totalAmount, size, showModal);
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
    localStorage.setItem("cart-ys", JSON.stringify(this.items));
  }

  getCartFromLocalStorage() {
    const items = localStorage.getItem("cart-ys");
    return items ? JSON.parse(items) : [];
  }

  saveLastOrderlineInLocalStorage() {
    localStorage.setItem("caartId", JSON.stringify(this.orderline));
  }

  getOrdelineFromlocalStorage() {
    let orderline = +JSON.parse(localStorage.getItem("caartId"));
    return orderline ? ++orderline : 0;
  }

  public openModal(item: ICartItem) {
    this.customModalService.backdropSubject.next(true);
    const modalRef = this.modalService.open(AddToCartComponent, {
      windowClass: "add-to-cart-modal",
      backdrop: false
    });
    modalRef.componentInstance.item = item;
  }
}
