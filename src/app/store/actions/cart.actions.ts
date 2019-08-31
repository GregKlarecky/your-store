import { createAction, props } from "@ngrx/store";

export const addProduct = createAction(
  "[Cart] Add product",
  props<{
    name: string;
    amount: number;
    price: number;
    sku: string;
    size?: number;
  }>()
);
