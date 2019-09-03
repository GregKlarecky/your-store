import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  public shippingForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: this.fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required]
    }),
    contact: this.fb.group({
      phoneNumber: ["", Validators.required],
      email: ["", Validators.required]
    })
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService
  ) {}

  get firstName() {
    return this.shippingForm.get("firstName");
  }

  get lastName() {
    return this.shippingForm.get("lastName");
  }

  get street() {
    return this.shippingForm.get("address").get("street");
  }

  get city() {
    return this.shippingForm.get("address").get("city");
  }

  get zip() {
    return this.shippingForm.get("address").get("zip");
  }

  get phoneNumber() {
    return this.shippingForm.get("contact").get("phoneNumber");
  }

  get email() {
    return this.shippingForm.get("contact").get("email");
  }

  ngOnInit() {}

  onSubmit() {
    this.cartService.setAddress(this.shippingForm.value);
    this.router.navigate(["/checkout", "payment"]);
  }
}
