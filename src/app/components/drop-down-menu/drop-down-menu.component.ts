import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { recommendations } from "src/app/shared/navbar/recommendations.helper";
import { CategoriesService } from "src/app/services/categories.service";
import { ICategory } from "src/app/shared/sidemenu/categories.helper";

@Component({
  selector: "app-drop-down-menu",
  templateUrl: "./drop-down-menu.component.html",
  styleUrls: ["./drop-down-menu.component.scss"]
})
export class DropDownMenuComponent implements OnInit {
  @Input() subcategories: ICategory[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  public recommendations: string[] = recommendations;
  constructor(private categoriesService: CategoriesService) {}

  goToCategory(id: number) {
    this.categoriesService.goToCategory(id);
    this.close.emit();
  }

  getGrandSubcategory(id: number) {
    let category = this.categoriesService.getCategoryById(id);
    return category ? category : {};
  }

  isJewellery(category: ICategory) {
    return category.parent === 16;
  }
  ngOnInit() {}
}
