import { Injectable } from "@angular/core";
import { productList } from "../components/subcategory/product-list.helper";
import { IProduct } from "src/interfaces/product.interface";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  productList: IProduct[] = productList;

  constructor() {}

  getProductsByName(name: string) {
    return this.productList.filter(product => {
      return product.name === name;
    });
  }

  getProductListByCategoryId(id: number) {
    return this.productList.filter(product => {
      return product.category_id === id;
    });
  }

  getProductListByCategoryIdAndFilters(
    id: number,
    minPrice: number,
    maxPrice: number
  ) {
    return this.productList.filter(
      product =>
        product.category_id === id &&
        this.filterByPrice(product, minPrice, maxPrice)
    );
  }

  filterByPrice(product: IProduct, min: number, max: number) {
    return product.price >= min && product.price <= max;
  }
}
