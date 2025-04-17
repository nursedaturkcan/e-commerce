import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteItem, FavoriteState } from '../../modals/slices';

const initialState: FavoriteState = {
  isFavorite: false,
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const existingIndex = state.favoriteItems.findIndex(item => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.favoriteItems.splice(existingIndex, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
