import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-custom-radio-input",
  templateUrl: "./custom-radio-input.component.html",
  styleUrls: ["./custom-radio-input.component.scss"]
})
export class CustomRadioInputComponent implements OnInit {
  public productSize = new FormControl("", [Validators.required]);
  public sizes: number[] = [42, 43, 44, 45, 46, 47];
  constructor() {}

  ngOnInit() {}
}
