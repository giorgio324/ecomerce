import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const item = state.cart.find((item) => {
          return item.id === action.payload.id;
        });
        if (item) {
          item.quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      },
    },
    removeFromCart: {
      reducer(state, action) {
        state.cart = state.cart.filter((item) => {
          return item.id !== action.payload.id;
        });
      },
    },
    clearCart: {
      reducer(state) {
        state.cart = [];
      },
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
