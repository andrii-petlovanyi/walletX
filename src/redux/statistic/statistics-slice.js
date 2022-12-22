import { createSlice } from '@reduxjs/toolkit';
import getTransactionSummary from './statistic-operations';

const initialState = {
  statistic: [],
  loadingStat: false,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: {
    [getTransactionSummary.pending]: state => {
      state.loadingStat = true;
    },
    [getTransactionSummary.fulfilled]: (state, { payload }) => {
      
      state.statistic = payload;
      state.loadingStat = false;
    },
    [getTransactionSummary.rejected]: state => {
      state.loadingStat = false;
    },
  },
});

export default statisticSlice.reducer;
