import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import cartSlice from './slices/cartSlice'; 
import favoriteSlice from './slices/favoriteSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer, 
    cart:cartSlice,
    favorite:favoriteSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
