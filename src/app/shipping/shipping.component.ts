import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  public shippingForm = this.fb.group({
    firstName: [""],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      zip: [""]
    }),
    contact: this.fb.group({
      phoneNumber: [""],
      email: [""]
    })
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["/checkout", "payment"]);
  }
}
