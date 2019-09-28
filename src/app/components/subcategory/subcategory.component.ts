import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "src/app/services/categories.service";
import { ProductsService } from "src/app/services/products.service";
import { Options } from "ng5-slider";
import { takeUntil, tap } from "rxjs/operators";
import { BaseComponent } from "src/app/shared/base/base.component";
import { CustomRadioInputService } from "src/app/services/custom-radio-input.service";

@Component({
  selector: "app-subcategory",
  templateUrl: "./subcategory.component.html",
  styleUrls: ["./subcategory.component.scss"]
})
export class SubcategoryComponent extends BaseComponent implements OnInit {
  public productList: IProduct[];
  public categoryId: number;
  public minPrice: number = 0;
  public size: number;
  public sizeList: number[];
  public maxPrice: number = 100;
  public ifShoeCategory: boolean;
  public initialOptions: Options;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private customRadio: CustomRadioInputService
  ) {
    super();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCategoryIdAndProductList();
    this.checkIfShoeCategory();
    this.filterBySize();
  }

  public filterBySize() {
    this.customRadio.customRadioValule
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(size => {
          this.size = size;
          this.getProductList();
        })
      )
      .subscribe();
  }

  public getCategoryIdAndProductList() {
    this.route.paramMap.subscribe(paramMap => {
      this.clearFilters();
      this.categoryId = parseInt(paramMap.get("id"), 10);
      this.checkIfShoeCategory();
      if (this.categoryId === 11) {
        this.productList = this.productsService.getProductsByName("bag");
      } else {
        this.getProductList();
      }
      this.getInitialOptions();
      this.sizeList = this.categoriesService.chooseSizelist(this.categoryId);
    });
  }

  public getInitialOptions() {
    const floor = Math.min(...this.getPricesList());
    const ceil = Math.max(...this.getPricesList());
    this.initialOptions = {
      floor,
      ceil,
      draggableRange: false
    };
  }

  public clearFilters() {
    this.minPrice = 0;
    this.maxPrice = 100;
    this.size = undefined;
    this.customRadio.clear.next();
  }

  public getProductList() {
    this.productList = this.productsService.getProductListByCategoryIdAndFilters(
      this.categoryId,
      this.minPrice,
      this.maxPrice,
      this.size
    );
  }

  public getPricesList() {
    return this.productList.map(product => product.price);
  }

  public filterByPrice($event) {
    this.minPrice = $event.min;
    this.maxPrice = $event.max;
    this.getProductList();
  }

  public checkIfShoeCategory() {
    const parent = this.categoriesService.getCategoryParentByChildId(
      this.categoryId
    );
    this.ifShoeCategory = parent.name === "shoes";
  }
}
