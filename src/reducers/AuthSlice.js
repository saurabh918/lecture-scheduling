import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
    users: [
      { username: 'admin', password: 'adminpassword', role: 'admin' }, // Admin user
      { username: 'instructor1', password: 'password1', role: 'instructor' },
      { username: 'instructor2', password: 'password2', role: 'instructor' },
      { username: 'instructor3', password: 'password3', role: 'instructor' },
      { username: 'instructor4', password: 'password4', role: 'instructor' },
      { username: 'instructor5', password: 'password5', role: 'instructor' },
      { username: 'instructor6', password: 'password6', role: 'instructor' },
      { username: 'instructor7', password: 'password7', role: 'instructor' },
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
        return {
          ...state,
          isAuthenticated: true,
          currentUser: user,
        }
      } 
    },
    logout: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
