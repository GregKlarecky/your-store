import { Injectable } from "@angular/core";
import { IProduct } from "src/interfaces/product.interface";
import { productList2 } from "../components/subcategory/product-list.helper.1";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  productList: IProduct[] = productList2;

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
    maxPrice: number,
    size: number
  ) {
    return this.productList.filter(
      product =>
        product.category_id === id &&
        this.filterByPrice(product, minPrice, maxPrice) &&
        this.filterBySize(product, size)
    );
  }

  filterByPrice(product: IProduct, min: number, max: number) {
    return product.price >= min && product.price <= max;
  }

  filterBySize(product: IProduct, size: number) {
    return size ? product.sizes.includes(size) : true;
  }
}
