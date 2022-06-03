import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./feature/user/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
