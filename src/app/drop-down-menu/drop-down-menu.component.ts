import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICategory } from "../shared/sidemenu/categories.helper";
import { recommendations } from "../shared/navbar/recommendations.helper";
import { CategoriesService } from "../services/categories.service";

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
  ngOnInit() {}
}
