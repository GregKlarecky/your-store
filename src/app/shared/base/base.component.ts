import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-base",
  template: ""
})
export class BaseComponent implements OnDestroy {
  public unsubscribe$: Subject<any> = new Subject();
  constructor() {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
