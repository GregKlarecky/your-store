import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICategory, categories } from "../shared/sidemenu/categories.helper";
import { IProduct } from "src/interfaces/product.interface";
import { Router } from "@angular/router";
import { productList } from "../components/subcategory/product-list.helper";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  categoriesToOpen: Subject<ICategory[]> = new Subject();
  productList: IProduct[] = productList;
  categoriesList: ICategory[] = categories;
  constructor(private router: Router) {}

  getCategoryById(id: number) {
    return this.categoriesList.find(category => {
      return category.id === id;
    });
  }
  getCategoriesByParentId(id: number) {
    return this.categoriesList.filter(category => {
      return category.parent === id;
    });
  }

  getCategoryParentByChildId(id: number) {
    const child = this.categoriesList.find(category => {
      return category.id === id;
    });
    const parent = this.categoriesList.find(category => {
      return category.id === child.parent;
    });
    return parent;
  }

  ifParentCategoryisShoes(childId: number) {
    const parent = this.getCategoryParentByChildId(childId);
    return parent.name === "shoes";
  }

  goToCategory(id: number) {
    const category = this.getCategoryById(id);
    if (!category.children) {
      this.router.navigate(["/subcategory", id]);
    }
  }
}
