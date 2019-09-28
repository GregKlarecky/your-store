import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomRadioInputService {
  public customRadioValule: Subject<number> = new Subject();
  public clear: Subject<any> = new Subject();

  constructor() {}
}
