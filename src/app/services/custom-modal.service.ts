import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomModalService {
  public sizeChosen: Subject<any> = new Subject();
  public backdropSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
}
