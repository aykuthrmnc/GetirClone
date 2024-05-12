import {createSlice} from "@reduxjs/toolkit";
import {Product} from "models";

type CartTypes = {
  cart: {product: Product; quantity: number}[];
};

const initialState: CartTypes = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      {payload}: {payload: {product: Product; quantity: number}},
    ) => {
      const index = state.cart.findIndex(
        item => item.product.id === payload.product.id,
      );

      if (index === -1) {
        state.cart = [...state.cart, payload];
      } else {
        state.cart[index].quantity += payload.quantity;
      }
    },
    removeFromCart: (state, {payload}: {payload: Product}) => {
      const index = state.cart.findIndex(
        item => item.product.id === payload.id,
      );

      if (state.cart?.[index]?.quantity > 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
        // state.cart = state.cart.filter(
        //   item => item?.product?.id !== payload?.id,
        // );
      }
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cart.actions;
export default cart.reducer;
