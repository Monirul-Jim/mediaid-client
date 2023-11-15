import { discountCalculator } from "@/utils/generator";
import { createSlice, current } from "@reduxjs/toolkit";

var initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartState = current(state);
      //  find existing product
      const findExist = cartState.cartItems.find((x) => x._id === payload._id);
      if (!findExist) {
        const price = discountCalculator(
          payload.price,
          payload.discountPercent
        );
        const data = {
          ...payload,
          quantity: 1,
          totalPrice: price,
        };

        return { cartItems: [...cartState.cartItems, data] };
      }
    },
    removeFromCart: (state, { payload }) => {
      const cartState = current(state);
      const removeItem = cartState.cartItems.filter(
        (x) => x._id !== payload._id
      );
      return { cartItems: removeItem };
    },
    incrementQuantity: (state, { payload }) => {
      const cartState = current(state);
      // // find unique data
      const data = cartState.cartItems.find((item) => item._id === payload._id);

      if (data) {
        // calculate discount Price
        const price = discountCalculator(data.price, data.discountPercent);
        // Increase quantity and price
        const newData = {
          ...data,
          quantity: data.quantity + 1,
          totalPrice: price * (data.quantity + 1),
        };
        // find product index
        const index = cartState.cartItems.findIndex(
          (x) => x._id === payload._id
        );
        // add item to replace index of cartList
        var newCart = [...cartState.cartItems];
        newCart[index] = newData;
        // Return replaced cartList to cartState
        return { cartItems: newCart };
      }
    },
    decrementQuantity: (state, { payload }) => {
      const cartState = current(state);
      // // find unique data
      const data = cartState.cartItems.find((item) => item._id === payload._id);
      if (data && data.quantity > 1) {
        // calculate discount Price
        const price = discountCalculator(data.price, data.discountPercent);
        // Increase quantity and price
        const newData = {
          ...data,
          quantity: data.quantity - 1,
          totalPrice: price * (data.quantity - 1),
        };

        // find product index
        const index = cartState.cartItems.findIndex(
          (x) => x._id === payload._id
        );
        // add item to replace index of cartList
        var newCart = [...cartState.cartItems];
        newCart[index] = newData;
        // Return replaced cartList to cartState
        return { cartItems: newCart };
      }
    },
    inputQuantityHandler: (state, { payload }) => {
      const cartState = current(state);
      const { product } = payload;
      const quantity = parseInt(payload.quantity);

      const data = cartState.cartItems.find((item) => item._id === product._id);
      if (data && quantity > 0) {
        const price = discountCalculator(data.price, data.discountPercent);
        // Increase quantity and price
        const newData = {
          ...data,
          quantity: quantity,
          totalPrice: price * quantity,
        };
        // find product index
        const index = cartState.cartItems.findIndex(
          (x) => x._id === product._id
        );
        var newCart = [...cartState.cartItems];
        newCart[index] = newData;
        return { cartItems: newCart };
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  inputQuantityHandler,
} = cartSlice.actions;
export default cartSlice.reducer;
