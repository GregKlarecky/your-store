import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICategory, categories } from "../shared/sidemenu/categories.helper";
import { IProduct } from "src/interfaces/product.interface";
import { productList } from "../subcategory/product-list.helper";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  categoriesToOpen: Subject<ICategory[]> = new Subject();
  productList: IProduct[] = productList;
  categoriesList: ICategory[] = categories;
  constructor() {}

  getProductsByName(name: string) {
    return this.productList.filter(product => {
      return product.name === name;
    });
  }

  getProductListByCategoryId(id: number) {
    return this.productList.filter(product => {
      return product.category_id === id;
    });
  }

  getCategoryById(id: number) {
    return this.categoriesList.find(category => {
      return category.id === id;
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
}
