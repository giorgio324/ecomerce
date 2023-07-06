import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  authenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.authenticated = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
