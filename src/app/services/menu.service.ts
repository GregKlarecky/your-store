import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  toggleMenu: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toggleSearch: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
