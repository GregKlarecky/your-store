import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICategory } from "../shared/sidemenu/categories.helper";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  categoriesToOpen: Subject<ICategory[]> = new Subject();
  constructor() {}
}
