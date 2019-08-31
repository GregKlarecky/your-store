import { Action, createReducer, on, State } from "@ngrx/store";
import * as CartActions from "../actions/cart.actions";

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: []
};

const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, product) => ({
    ...state,
    items: [...state.items, product]
  }))
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
