import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FooterService {
  showFooter: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor() {}
}
