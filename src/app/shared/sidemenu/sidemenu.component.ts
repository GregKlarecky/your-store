import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

import { categories, ICategory } from "./categories.helper";
import { CategoriesService } from "src/app/services/categories.service";
import { Router } from "@angular/router";
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from "@angular/animations";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"],
  animations: [
    trigger("cascadeAnimations", [
      transition(":enter", [
        query(".categories-list-item", [
          style({ opacity: 0, transform: "translateX(-100px)" }),
          stagger(30, [
            animate(
              "500ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ]),
      transition(":leave", [
        query(".categories-list-item", [
          style({ opacity: 1, transform: "none" }),
          stagger(30, [
            animate(
              "500ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 0, transform: "translateX(200px)" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class SidemenuComponent implements OnInit {
  public categories: ICategory[] = categories;
  public rootCategory: ICategory;
  public newCategories: boolean = true;
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
    this.categoriesService.categoriesToOpen
      .pipe(
        tap(() => {
          this.newCategories = false;
        }),
        delay(500),
        tap(categories => {
          this.openedCategories = categories;
          this.newCategories = true;
        })
      )
      .subscribe();
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
