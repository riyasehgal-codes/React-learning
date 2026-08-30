import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice"; // adjust path if needed

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;