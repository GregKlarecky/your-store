import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";
import { FormControl, Validators } from "@angular/forms";
import { BaseComponent } from "../shared/base/base.component";
import { CartService } from "../services/cart.service";
import { stringValidator } from "./size.validator";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public sizes: number[] = [42, 43, 44, 45, 46, 47];
  public productList: IProduct[] = productList;
  public product: IProduct;
  public sizesClicked: boolean = false;
  public sizesOpened: boolean = false;
  public productSize = new FormControl("Wybierz", [
    Validators.required,
    stringValidator
  ]);
  public cart: IProduct[];
  public touched: boolean = false;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    super();
  }

  ngOnInit() {
    this.getProductSku();
  }

  public getProductSku() {
    this.route.paramMap.subscribe(paramMap => {
      const sku = paramMap.get("sku");
      this.product = this.productList.find(product => {
        return product.sku === sku;
      });
    });
  }

  public openSizes() {
    this.sizesClicked = true;
    this.sizesOpened = !this.sizesOpened;
  }

  public addToCart() {
    if (typeof this.productSize.value === "number") {
      this.cartService.addToCart(this.product, 1, this.productSize.value);
      return;
    }
    this.touched = true;
  }

  public subtractFromCart() {
    this.cartService.subtractFromCart(this.product, 1, this.productSize.value);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
