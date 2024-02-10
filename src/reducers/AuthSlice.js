// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
    users: [
      { username: 'admin', password: 'adminpassword', role: 'admin' }, // Admin user
      { username: 'user1', password: 'password1', role: 'regular' },
      { username: 'user2', password: 'password2', role: 'regular' },
      // Add more users as needed
    ],
    currentUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(user => user.username === username && user.password === password);
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
