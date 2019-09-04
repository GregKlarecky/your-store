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
  public paymentOptions: any[] = paymentyOptions;
  public deliveryOptions: any[] = deliveryOptions;
  public paymentForm = this.fb.group({
    paymentInput: ["", Validators.required],
    deliveryInput: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService
  ) {}

  get deliveryInput() {
    return this.paymentForm.get("deliveryInput");
  }

  get paymentInput() {
    return this.paymentForm.get("paymentInput");
  }

  ngOnInit() {}

  onSubmit() {
    this.cartService.setDeliveryAndPayment(this.paymentForm.value);
    this.router.navigate(["/checkout", "order"]);
  }
}
