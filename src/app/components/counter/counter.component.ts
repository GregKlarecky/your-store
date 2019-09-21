import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { BaseComponent } from "../shared/base/base.component";
import { tap, delay, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() amount: number;
  @Output() add: EventEmitter<number> = new EventEmitter();
  @Output() subtract: EventEmitter<number> = new EventEmitter();
  public clickedAdd: boolean = false;
  public clickedSubtract: boolean = false;
  constructor() {
    super();
  }

  public addProduct() {
    this.add.emit(1);
  }
  public subtractProduct() {
    this.subtract.emit(1);
  }
  ngOnInit() {
    this.add
      .pipe(
        tap(() => {
          this.clickedAdd = true;
        }),
        delay(500),
        tap(() => {
          this.clickedAdd = false;
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();

    this.subtract
      .pipe(
        tap(() => {
          this.clickedSubtract = true;
        }),
        delay(500),
        tap(() => {
          this.clickedSubtract = false;
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
