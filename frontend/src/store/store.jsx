import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";

const store = configureStore({
  reducer: { user },
  devTools: true,
});

export default store;
