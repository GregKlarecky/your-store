import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BaseComponent } from "../base/base.component";
import { CustomRadioInputService } from "src/app/services/custom-radio-input.service";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-custom-radio-input",
  templateUrl: "./custom-radio-input.component.html",
  styleUrls: ["./custom-radio-input.component.scss"]
})
export class CustomRadioInputComponent extends BaseComponent implements OnInit {
  public option = new FormControl("");
  @Input() values: any[];

  constructor(private customRadio: CustomRadioInputService) {
    super();
  }

  ngOnInit() {
    this.stampValues();
    this.option.valueChanges.subscribe(a => {
      this.customRadio.customRadioValule.next(this.option.value);
    });
    this.customRadio.clear
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => {
          this.option.setValue(undefined);
        })
      )
      .subscribe();
  }

  stampValues() {
    this.values = this.values.map(value => {
      if (!value) {
        return { stamp: "All", value: value, label: "All" };
      }
      return { stamp: value + ".", value: value, label: value };
    });
  }
}
