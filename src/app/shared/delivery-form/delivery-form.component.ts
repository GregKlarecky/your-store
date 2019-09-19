import { Component, OnInit } from "@angular/core";
import { paymentyOptions } from "src/app/payment/payment-options";
import { deliveryOptions } from "src/app/payment/delivery-options";
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-delivery-form",
  templateUrl: "./delivery-form.component.html",
  styleUrls: ["./delivery-form.component.scss"]
})
export class DeliveryFormComponent implements OnInit {
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
