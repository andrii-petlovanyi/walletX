import { createSlice } from '@reduxjs/toolkit';
import getCategory from 'redux/category/category-operations';

const initialState = {
  category: [],
  loadingCat: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [getCategory.pending]: state => {
      state.loadingCat = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.category = payload;
      state.loadingCat = false;
    },
    [getCategory.rejected]: state => {
      state.loadingCat = false;
    },
  },
});

export default categorySlice.reducer;
