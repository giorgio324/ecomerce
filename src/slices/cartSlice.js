import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
    increaseQuantity: {
      reducer(state, action) {
        const item = state.cart.find((item) => {
          return item.id === action.payload.id;
        });
        if (item) {
          item.quantity += 1;
        }
      },
    },
    decreaseQuantity: {
      reducer(state, action) {
        const item = state.cart.find((item) => {
          return item.id === action.payload.id;
        });
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
    },

    clearCart: {
      reducer(state) {
        if (state.cart.length > 0) {
          toast.success('Cart is Cleared');
        }
        state.cart = [];
      },
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
