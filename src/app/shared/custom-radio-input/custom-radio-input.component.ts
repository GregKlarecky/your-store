import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-custom-radio-input",
  templateUrl: "./custom-radio-input.component.html",
  styleUrls: ["./custom-radio-input.component.scss"]
})
export class CustomRadioInputComponent implements OnInit {
  public option = new FormControl("");
  public values: any[] = [43, 44, 45, 46, 47, 48];

  constructor() {}

  ngOnInit() {
    this.stampValues();
  }

  stampValues() {
    this.values = this.values.map(value => {
      return { stamp: value + ".", value: value };
    });
  }
}
