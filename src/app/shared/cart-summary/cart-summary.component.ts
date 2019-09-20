import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
  styleUrls: ["./cart-summary.component.scss"]
})
export class CartSummaryComponent implements OnInit {
  public totalCost: number;
  @Input() buttonEnabled: boolean;
  @Input() showButton: boolean;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.totalCost = this.cartService.getTotalCost();
  }
}
