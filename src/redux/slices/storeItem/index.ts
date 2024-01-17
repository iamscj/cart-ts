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
    filterBySearch: (state, action) => {
      state = initState;
      const searchFieldVal = action.payload.trim();
      if (searchFieldVal.length === 0) {
        return initState;
      }
      const newState = state.filter(
        (item) =>
          item.name.toLowerCase().startsWith(searchFieldVal.toLowerCase()) ||
          item.categories.some((category) =>
            category.toLowerCase().startsWith(searchFieldVal.toLowerCase())
          )
      );
      return newState;
    },
  },
});

export const { sortByPrice, sortByRating, filterBySearch } =
  storeItemSlice.actions;

export default storeItemSlice.reducer;
