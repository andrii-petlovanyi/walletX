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
      state.transactions = payload.result?.reverse();
      state.loadingStat = false;
    },
    [getTransactionSummary.rejected]: state => {
      state.loadingStat = false;
    },
  },
});

export default statisticSlice.reducer;
