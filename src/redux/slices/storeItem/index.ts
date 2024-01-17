import { createSlice } from "@reduxjs/toolkit";

import items from "../../../data/items.json";

interface ItemType {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
}

const initState: ItemType[] = items;

export const storeItemSlice = createSlice({
  initialState: initState,
  name: "storeItems",
  reducers: {
    sortByPrice: (state) => {
      const items = [...state].sort((a, b) => a.price - b.price);
      state = items;
      return state;
    },
    sortByRating: (state, action) => {
      if (action.payload === "priceAndRating") {
        const items = [...state].sort((a, b) => {
          if (a.price === b.price) {
            return b.rating - a.rating;
          } else {
            return a.price - b.price;
          }
        });
        state = items;
      }
      if (action.payload === "rating") {
        const items = [...state].sort((a, b) => b.rating - a.rating);
        state = items;
      }
      return state;
    },
  },
});

export const { sortByPrice, sortByRating } = storeItemSlice.actions;

export default storeItemSlice.reducer;
