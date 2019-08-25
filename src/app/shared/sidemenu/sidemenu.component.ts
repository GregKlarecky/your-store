import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

import { categories, ICategory } from "./categories.helper";
import { CategoriesService } from "src/app/services/categories.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"]
})
export class SidemenuComponent implements OnInit {
  public categories: ICategory[] = categories;
  public rootCategory: ICategory;
  public;
  isMenuToggled: boolean;
  openedCategories: ICategory[];
  constructor(
    private menuService: MenuService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.rootCategory = this.getCategoryById(0);
    this.watchMenuState();
    this.categoriesService.categoriesToOpen.subscribe(categories => {
      this.openedCategories = categories;
    });
    this.showSubcategoryByParentId(0);
  }

  watchMenuState() {
    this.menuService.toggleMenu.subscribe(isToggled => {
      this.isMenuToggled = isToggled;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu.next(!this.isMenuToggled);
  }

  public getCategoryById(id: number) {
    return this.categories.find(category => category.id === id);
  }

  showSubcategoryByParentId(id: number) {
    const categories = this.categories.filter(category => {
      return category.parent === id;
    });
    if (categories.length) {
      this.rootCategory = this.getCategoryById(id);
      this.categoriesService.categoriesToOpen.next(categories);
    } else {
      this.menuService.toggleMenu.next(!this.isMenuToggled);
      this.router.navigate(["subcategory", id]);
    }
  }
}
