const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItem: [],
};

const searchSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});
export const { addToCart, removeFromCart } = searchSlice.actions;
export default searchSlice.reducer;
