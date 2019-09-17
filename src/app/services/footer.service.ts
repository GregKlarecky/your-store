import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, fromEvent } from "rxjs";
import { startWith, map, distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FooterService {
  showFooter: BehaviorSubject<boolean> = new BehaviorSubject(true);
  screenWidth: Observable<boolean> = fromEvent(window, "resize").pipe(
    startWith(window.innerWidth),
    map(() => window.innerWidth > 576),
    distinctUntilChanged()
  );
  constructor() {}
}
