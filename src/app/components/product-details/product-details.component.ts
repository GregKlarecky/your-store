import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";
import { FormControl, Validators } from "@angular/forms";
import { stringValidator } from "./size.validator";
import { BaseComponent } from "src/app/shared/base/base.component";
import { CartService } from "src/app/services/cart.service";
import { CategoriesService } from "src/app/services/categories.service";

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
  public ifShoe: boolean;
  public sizesClicked: boolean = false;
  public sizesOpened: boolean = false;
  public productSize = new FormControl("Wybierz", [
    Validators.required,
    stringValidator
  ]);
  public cart: IProduct[];
  public touched: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private categoriesService: CategoriesService
  ) {
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
      this.ifShoe = this.categoriesService.ifParentCategoryisShoes(
        this.product.category_id
      );
    });
  }

  public openSizes() {
    this.sizesClicked = true;
    this.sizesOpened = !this.sizesOpened;
  }

  public addToCart() {
    if (!this.ifShoe || this.productSize.value !== "Wybierz") {
      const size = this.ifShoe ? this.productSize.value : "no-size";
      this.cartService.addToCart(this.product, 1, size);
      return;
    }
    this.touched = true;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
