import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';
import { app } from '../utils/firebase';
import { toast } from 'react-toastify';
const initialState = {
  user: null,
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.user;
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserWithGoogle.fulfilled, (state, { payload }) => {
      console.log(payload);
      const { uid, photoURL, displayName } = payload;
      state.user = { uid, photoURL, displayName };
      state.authenticated = true;
    });
    builder.addCase(loginUserWithGithub.fulfilled, (state, { payload }) => {
      const { uid, photoURL } = payload;
      console.log(payload);
      state.user = { uid, photoURL };
      state.authenticated = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.authenticated = false;
    });
  },
});
export const loginUserWithGoogle = createAsyncThunk(
  'auth/loginUserWithGoogle',
  async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    const { uid, photoURL, displayName } = result.user;
    toast.success(`Welcome ${displayName}`);
    return { uid, photoURL, displayName };
  }
);
export const loginUserWithGithub = createAsyncThunk(
  'auth/loginUserWithGithub',
  async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    const { uid, photoURL } = result.user;
    return { uid, photoURL };
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  const auth = getAuth(app);
  await signOut(auth);
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
