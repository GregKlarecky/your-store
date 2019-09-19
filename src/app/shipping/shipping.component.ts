import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {}

  onFormSubmit($event) {
    this.cartService.setAddress($event);
    this.router.navigate(["/checkout", "payment"]);
  }
}
