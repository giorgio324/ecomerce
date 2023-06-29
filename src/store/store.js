import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import { loadState, saveState } from '../utils/localstorage';
const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
