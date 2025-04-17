import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState } from '../../modals/slices';



const initialState: CategoryState = {
  selectedCategory: "amazon-devices",
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
