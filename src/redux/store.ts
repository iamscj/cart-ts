import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/item";
import storeItemSlice from "./slices/storeItem/index";

export const store = configureStore({
  reducer: { items: itemSlice, storeItems: storeItemSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
