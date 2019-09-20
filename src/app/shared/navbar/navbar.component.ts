import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "../base/base.component";
import { CartService } from "src/app/services/cart.service";
import { ICategory, categories } from "../sidemenu/categories.helper";
import { CategoriesService } from "src/app/services/categories.service";
import { recommendations } from "./recommendations.helper";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent extends BaseComponent
  implements OnInit, OnDestroy {
  isMenuToggled: boolean;
  itemsCount: number;
  selectedCategoryId: number;
  categories: ICategory[] = categories;
  rootCategories: ICategory[];
  subcategories: ICategory[] = [];
  recommendations: string[] = recommendations;
  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private categoriesService: CategoriesService
  ) {
    super();
  }

  ngOnInit() {
    this.watchMenuState();
    this.cartService.newCart.subscribe(items => {
      this.itemsCount = items.length;
    });
    this.rootCategories = this.categoriesService.getCategoriesByParentId(0);
  }

  turnOff() {
    this.selectedCategoryId = null;
  }

  selectSubcategory(category: ICategory) {
    if (category.children) {
      this.selectedCategoryId = category.id;
      this.subcategories = this.categoriesService.getCategoriesByParentId(
        category.id
      );
    }
  }

  goToCategory(id: number) {
    this.categoriesService.goToCategory(id);
  }

  watchMenuState() {
    this.menuService.toggleMenu
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isToggled => {
        this.isMenuToggled = isToggled;
      });
  }

  toggleMenu() {
    this.menuService.toggleMenu.next(!this.isMenuToggled);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
