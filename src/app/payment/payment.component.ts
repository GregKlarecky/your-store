import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { paymentyOptions } from "./payment-options";
import { deliveryOptions } from "./delivery-options";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  public paymentOptions: any[] = paymentyOptions;
  public deliveryOptions: any[] = deliveryOptions;
  public paymentForm = this.fb.group({
    payment: [""],
    delivery: [""]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["/checkout", "order"]);
  }
}
