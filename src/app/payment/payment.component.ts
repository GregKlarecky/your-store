import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { paymentyOptions } from "./payment-options";
import { deliveryOptions } from "./delivery-options";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  ngOnInit() {}
}
