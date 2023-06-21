import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: Array<any>;
}

const initialState: CounterState = {
  value: [],
};

// TODO: Type the payload with the proper product type
const saveCurrentProduct = (
  state: CounterState,
  action: PayloadAction<Array<any>>
) => {
  state.value.push(action.payload);
};

const removeCurrentProduct = (
  state: CounterState,
  action: PayloadAction<Array<any>>
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
