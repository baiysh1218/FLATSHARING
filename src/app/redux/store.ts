import { configureStore } from "@reduxjs/toolkit";
import { rickApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickApi.middleware),
});

setupListeners(store.dispatch);
