import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localData from "../data/data.json"; // Import local JSON file

// Define TypeScript type for data
interface Item {
  id: number;
  name: string;
  value: string;
}

// Define initial state from JSON file
interface DataState {
  items: Item[];
}

const initialState: DataState = {
  items: localData, // Assign local JSON as initial state
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { updateItem } = dataSlice.actions;
export default dataSlice.reducer;
