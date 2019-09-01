import { IProduct } from "./product.interface";

export interface ICartItem extends IProduct {
  amount?: number;
  cartId?: string;
  size?: number | string;
  timeStamp?: number;
}
