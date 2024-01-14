import { createSlice } from "@reduxjs/toolkit";

// interface ItemType {
//   id: number;
//   quantity: number;
// }
interface ItemType {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
  quantity: number;
}

const initState: ItemType[] = [];

export const itemSlice = createSlice({
  initialState: initState,
  name: "item",
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, rating, categories, imgUrl } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem === undefined) {
        state.push({
          id,
          name,
          price,
          rating,
          categories,
          imgUrl,
          quantity: 1,
        });
      } else {
        existingItem.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const { id, name, price, rating, categories, imgUrl } = action.payload;
      console.log("hi", id);
      return state.filter((item) => item.id !== id);
    },
    removeItemByOne: (state, action) => {
      const { id, name, price, rating, categories, imgUrl } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem !== undefined) {
        if (existingItem.quantity !== 1) {
          existingItem.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, removeItemByOne } = itemSlice.actions;

export default itemSlice.reducer;
