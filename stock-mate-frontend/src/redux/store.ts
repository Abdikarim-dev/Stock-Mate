import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/User.js";
const store = configureStore({
  reducer: {
    user: userReducer,
    // audit: auditReducer,
    // damagedItem: damagedItemReducer,
    // inventory: inventoryReducer,
    // store: storeReducer,
  },
});

export default store;
