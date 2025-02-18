import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const slice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "john.doe",
        name: "John Mclaren Doe",
        email: "johnmclaren@gmail.com",
        password: "123456",
        phone: "1234567890",
      },
    ],
    activeUser: {},
    isAuthenticated: false,
  },
  reducers: {
    login(state, action) {
      const userFromLoginPage = action.payload;

      console.log(userFromLoginPage);

      const existingUser = state.users.find(
        (user) =>
          (user.phone === userFromLoginPage.identifier ||
            user.username === userFromLoginPage.identifier) &&
          user.password === userFromLoginPage.password
      );
      if (existingUser) {
        state.isAuthenticated = true;
        state.activeUser = existingUser;
      } else {
        toast.error("Incorrect Credentials");
        state.isAuthenticated = false;
      }
    },
  },
});

export const { login } = slice.actions;

export default slice.reducer;
