import { Injectable } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList2 } from "../components/subcategory/product-list.helper.1";
import {
  ISortOptions,
  directions,
  sortTypes
} from "src/interfaces/sort-options.interface";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public productList: IProduct[] = productList2;
  public sortOptions: Subject<ISortOptions> = new Subject();

  constructor() {}

  getProductsByName(name: string) {
    return this.productList.filter(product => {
      return product.name === name;
    });
  }
  getSimilarProducts(
    searchTerm: string,
    minPrice: number,
    maxPrice: number,
    size: number,
    sort?: ISortOptions
  ) {
    const list = this.productList.filter(
      product =>
        product.name.includes(searchTerm) &&
        this.filterByPrice(product, minPrice, maxPrice) &&
        this.filterBySize(product, size)
    );
    switch (sort.type) {
      case sortTypes.price:
        return this.sortByPrice(list, sort.direction);
      case sortTypes.alpha:
        return this.sortByAlpha(list, sort.direction);
      default:
        return list;
    }
  }

  getProductListByCategoryId(id: number) {
    return this.productList.filter(product => {
      return product.category_id === id;
    });
  }

  getProductListByCategoryIdAndFilters(
    id: number,
    minPrice: number,
    maxPrice: number,
    size: number,
    sort?: ISortOptions
  ) {
    const list = this.productList.filter(
      product =>
        product.category_id === id &&
        this.filterByPrice(product, minPrice, maxPrice) &&
        this.filterBySize(product, size)
    );
    switch (sort.type) {
      case sortTypes.price:
        return this.sortByPrice(list, sort.direction);
      case sortTypes.alpha:
        return this.sortByAlpha(list, sort.direction);
      default:
        return list;
    }
  }

  filterByPrice(product: IProduct, min: number, max: number) {
    return product.price >= min && product.price <= max;
  }

  filterBySize(product: IProduct, size: number) {
    return size ? product.sizes.includes(size) : true;
  }
  sortByPrice(list, direction) {
    switch (direction) {
      case directions.ascending:
        return list.sort((a, b) => a.price - b.price);
      case directions.descending:
        return list.sort((a, b) => b.price - a.price);
    }
  }
  sortByAlpha(list, direction) {
    switch (direction) {
      case directions.ascending:
        return list.sort((a, b) => {
          return a.name > b.name ? +1 : -1;
        });
      case directions.descending:
        return list.sort((a, b) => {
          return a.name < b.name ? +1 : -1;
        });
    }
  }
}
