import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"]
})
export class AddressFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
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

  constructor(private fb: FormBuilder) {}

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

  ngOnInit() {
    this.setValue();
  }

  onSubmit() {
    this.formSubmit.emit(this.shippingForm.value);
  }

  public setValue() {
    const savedAddress = localStorage.getItem("address-ys");
    if (savedAddress) {
      this.shippingForm.setValue(JSON.parse(savedAddress));
    }
  }
}
