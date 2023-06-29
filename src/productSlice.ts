import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Product } from "./types/index";

interface CounterState {
  value: Array<Product>;
}

const initialState: CounterState = {
  value: [],
};

// TODO: Type the payload with the proper product type
const saveCurrentProduct = (
  state: CounterState,
  action: PayloadAction<Product>
) => {
  state.value.push(action.payload);
};

const removeCurrentProduct = (
  state: CounterState,
  action: PayloadAction<Product>
) => {
  state.value = state.value.filter((item) => item.id !== action.payload.id);
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    saveProduct: saveCurrentProduct,
    removeProduct: removeCurrentProduct,
  },
});

export const { saveProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
