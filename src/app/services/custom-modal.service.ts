import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomModalService {
  public backdropSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
