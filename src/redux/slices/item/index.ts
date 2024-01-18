import { createSlice } from "@reduxjs/toolkit";
import storeItems from "../../../data/items.json";
import { ItemType, localStorageItemType } from "../../../types";

const localStorageKey = "items";

const saveStateToLocalStorage = (state: ItemType[]): void => {
  const newState: localStorageItemType[] = state.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  localStorage.setItem(localStorageKey, JSON.stringify(newState));
};

const getInitialState = (): ItemType[] => {
  const storedState = localStorage.getItem(localStorageKey);

  const parsedState = storedState ? JSON.parse(storedState) : [];

  if (parsedState.length === 0) {
    return parsedState;
  }

  const initialState: ItemType[] = parsedState.map((storedItem: ItemType) => {
    const fullItemDetails = storeItems.find(
      (item) => item.id === storedItem.id
    );
    return { ...fullItemDetails, quantity: storedItem.quantity };
  });
  return initialState;
};

const initState: ItemType[] = getInitialState();

export const itemSlice = createSlice({
  initialState: initState,
  name: "items",
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
      const { id } = action.payload;
      const newState = state.filter((item) => item.id !== id);
      saveStateToLocalStorage(newState);
      return newState;
    },
    removeItemByOne: (state, action) => {
      const { id } = action.payload;
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
