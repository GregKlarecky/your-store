import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICategory, categories } from "../shared/sidemenu/categories.helper";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  public categoriesToOpen: Subject<ICategory[]> = new Subject();
  public categoriesList: ICategory[] = categories;
  public sizeList: Subject<number[]> = new Subject();
  public menSizes: any[] = [undefined, 43, 44, 45, 46, 47];
  public womenSizes: any[] = [undefined, 35, 36, 37, 38, 39];

  constructor(private router: Router) {}

  public chooseSizelist(id: number) {
    const parent = this.getCategoryParentByChildId(id);
    const grandparent = this.getCategoryParentByChildId(parent.id);
    if (grandparent.name === "men") {
      return this.menSizes;
    } else if (grandparent.name === "women") {
      return this.womenSizes;
    }
    return [];
  }

  public getCategoryById(id: number) {
    return this.categoriesList.find(category => {
      return category.id === id;
    });
  }
  public getCategoriesByParentId(id: number) {
    return this.categoriesList.filter(category => {
      return category.parent === id;
    });
  }

  public getCategoryParentByChildId(id: number) {
    const child = this.categoriesList.find(category => {
      return category.id === id;
    });
    const parent = this.categoriesList.find(category => {
      return category.id === child.parent;
    });
    return parent;
  }

  public ifParentCategoryisShoes(childId: number) {
    const parent = this.getCategoryParentByChildId(childId);
    return parent.name === "shoes";
  }

  public goToCategory(id: number) {
    const category = this.getCategoryById(id);
    if (!category.children) {
      this.router.navigate(["/subcategory", id]);
    }
  }
}
