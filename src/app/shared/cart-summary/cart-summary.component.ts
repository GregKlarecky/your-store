import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
  styleUrls: ["./cart-summary.component.scss"]
})
export class CartSummaryComponent implements OnInit {
  @Input() totalCost: number;
  @Input() buttonEnabled: boolean;
  @Input() showButton: boolean;
  constructor() {}

  ngOnInit() {}
}
