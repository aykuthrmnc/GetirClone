import {createSlice} from "@reduxjs/toolkit";

type CartTypes = {
  cart: unknown[];
};

const initialState: CartTypes = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter(item => item !== payload);
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cart.actions;
export default cart.reducer;
