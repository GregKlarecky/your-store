import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { sortTypes, directions } from "src/interfaces/sort-options.interface";

@Component({
  selector: "app-sort",
  template: `
    <div class="option" [class.active]="type === 'Alpha'" (click)="sortAlpha()">
      <i
        class="fas"
        [ngClass]="{
          'fa-sort-alpha-down': alphaDown,
          'fa-sort-alpha-down-alt': !alphaDown
        }"
        (click)="sortAlpha()"
      ></i
      ><span> By alphabet </span>
    </div>
    <div class="option" (click)="sortPrice()" [class.active]="type === 'Price'">
      <i
        class="fas"
        [ngClass]="{
          'fa-sort-numeric-down': priceDown,
          'fa-sort-numeric-down-alt': !priceDown
        }"
        (click)="sortPrice()"
      ></i
      ><span> By price </span>
    </div>
  `,
  styleUrls: ["./sort.component.scss"]
})
export class SortComponent implements OnInit {
  alphaDown: boolean = false;
  priceDown: boolean = false;
  type: string = "none";
  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  public sortAlpha() {
    this.type = sortTypes.alpha;
    this.alphaDown = !this.alphaDown;
    const direction = this.alphaDown
      ? directions.ascending
      : directions.descending;
    this.productsService.sortOptions.next({ type: this.type, direction });
  }

  public sortPrice() {
    this.type = sortTypes.price;
    this.priceDown = !this.priceDown;
    const direction = this.priceDown
      ? directions.ascending
      : directions.descending;
    this.productsService.sortOptions.next({ type: this.type, direction });
  }
}
