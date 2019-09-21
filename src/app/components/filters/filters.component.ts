import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CategoriesService } from "src/app/services/categories.service";
import { ICategory } from "src/app/shared/sidemenu/categories.helper";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs/operators";
import { Options } from "ng5-slider";
import { IValues } from "src/interfaces/values.interface";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  public subcategories: ICategory[];
  public parentCategory: ICategory;
  public value: number = 0;
  public highValue: number = 100;
  @Output() values: EventEmitter<IValues> = new EventEmitter();
  public options: Options = {
    floor: 0,
    ceil: 100,
    draggableRange: false
  };

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.handleRouteParameters();
  }

  public handleRouteParameters() {
    this.route.paramMap
      .pipe(
        tap(paramMap => {
          const id = parseInt(paramMap.get("id"), 10);
          this.parentCategory = this.categoriesService.getCategoryParentByChildId(
            id
          );
          this.subcategories = this.categoriesService.getCategoriesByParentId(
            this.parentCategory.id
          );
        })
      )
      .subscribe();
  }

  filterByPrice() {
    this.values.emit({ min: this.value, max: this.highValue });
  }
}
