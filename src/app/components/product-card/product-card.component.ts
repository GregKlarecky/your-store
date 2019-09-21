import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IProduct } from "src/interfaces/product.interface";
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";
import { takeUntil } from "rxjs/operators";
import { CustomModalService } from "src/app/services/custom-modal.service";
import { CartService } from "src/app/services/cart.service";
import { BaseComponent } from "src/app/shared/base/base.component";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() product: IProduct;
  @Input() productSizeNeeded: boolean;
  modalRef;
  constructor(
    private modalService: NgbModal,
    private customModalService: CustomModalService,
    private cartService: CartService
  ) {
    super();
  }

  ngOnInit() {
    this.customModalService.sizeChosen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(payload => {
        if (payload.item.sku === this.product.sku) {
          this.cartService.addToCart(
            payload.item,
            payload.amount,
            payload.size
          );
        }
      });
  }

  public chooseSize() {
    this.customModalService.backdropSubject.next(true);
    const modalRef = this.modalService.open(AddToCartComponent, {
      windowClass: "add-to-cart-modal",
      backdrop: false
    });
    modalRef.componentInstance.item = this.product;
  }

  public addToCart() {
    if (this.productSizeNeeded) {
      this.chooseSize();
    } else {
      this.cartService.addToCart(this.product, 1, "no-size");
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
