import { createSlice } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
  quantity: number;
}

const localStorageKey = "items";

const saveStateToLocalStorage = (state: ItemType[]): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const getInitialState = (): ItemType[] => {
  const storedState = localStorage.getItem(localStorageKey);
  return storedState ? JSON.parse(storedState) : [];
};

const initState: ItemType[] = getInitialState();

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
      saveStateToLocalStorage(state);
    },
    removeItem: (state, action) => {
      const { id, name, price, rating, categories, imgUrl } = action.payload;
      const newState = state.filter((item) => item.id !== id);
      saveStateToLocalStorage(newState);
      return newState;
    },
    removeItemByOne: (state, action) => {
      const { id, name, price, rating, categories, imgUrl } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem !== undefined) {
        if (existingItem.quantity !== 1) {
          existingItem.quantity -= 1;
          saveStateToLocalStorage(state);
        } else {
          const newState = state.filter((item) => item.id !== id);
          saveStateToLocalStorage(newState);
          return newState;
        }
      }
    },
  },
});

export const { addItem, removeItem, removeItemByOne } = itemSlice.actions;

export default itemSlice.reducer;
