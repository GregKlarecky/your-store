import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "src/app/services/categories.service";
import { ProductsService } from "src/app/services/products.service";
import { Options } from "ng5-slider";
import { takeUntil, tap } from "rxjs/operators";
import { BaseComponent } from "src/app/shared/base/base.component";
import { CustomRadioInputService } from "src/app/services/custom-radio-input.service";
import { CustomModalService } from "src/app/services/custom-modal.service";
import { ISortOptions } from "src/interfaces/sort-options.interface";
import { initialSort } from "./products-sort.helper";

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
  public showFilters: boolean = false;
  public searchTerm: string;
  public sortOptions: ISortOptions = initialSort;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private customRadio: CustomRadioInputService,
    private customModalService: CustomModalService
  ) {
    super();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getCategoryIdAndProductList();
    this.filterBySize();
    this.sortList();
  }

  public sortList() {
    this.productsService.sortOptions
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((options: ISortOptions) => {
        this.sortOptions = options;
        this.getProductList();
      });
  }

  public openFilters() {
    this.customModalService.toggleFilters.next(true);
  }

  public filterBySize() {
    this.customRadio.customRadioValule
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(size => {
        this.size = size;
        this.getProductList();
      });
  }

  public getCategoryIdAndProductList() {
    this.route.paramMap.subscribe(paramMap => {
      this.clearFilters();
      this.categoryId = parseInt(paramMap.get("id"), 10);
      this.searchTerm = paramMap.get("search-term");
      if (this.categoryId) {
        this.handleCategoryId();
      }
      if (this.searchTerm) {
        this.handleSearchTerm();
      }
    });
  }

  public handleSearchTerm() {
    this.getProductList();
    this.getInitialOptions();
  }

  public handleCategoryId() {
    this.checkIfShoeCategory();
    if (this.categoryId === 11) {
      this.categoryId = 61;
    }
    this.getProductList();
    this.getInitialOptions();
    this.sizeList = this.categoriesService.chooseSizelist(this.categoryId);
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
    if (this.categoryId) {
      this.productList = this.productsService.getProductListByCategoryIdAndFilters(
        this.categoryId,
        this.minPrice,
        this.maxPrice,
        this.size,
        this.sortOptions
      );
    } else if (this.searchTerm) {
      this.productList = this.productsService.getSimilarProducts(
        this.searchTerm,
        this.minPrice,
        this.maxPrice,
        this.size,
        this.sortOptions
      );
    }
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
